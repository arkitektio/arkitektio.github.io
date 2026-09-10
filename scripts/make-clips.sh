#!/usr/bin/env bash
# Cuts the short, muted loops the front page plays out of the volume-viewer
# presentation recordings. Every clip is normalised to 1280x672 (the ~1.9:1
# frame the recordings share) so the hero and bento slots can reserve one
# aspect ratio and never shift layout, whichever clip gets picked.
#
# Per clip this writes to public/clips/:
#   <slug>.mp4   H.264 high, faststart, no audio (plays everywhere; VP9 was
#                not smaller for this screen-recording content, so no webm)
#   <slug>.jpg   poster, the in-point frame
#
# Run from the repo root: bash scripts/make-clips.sh
set -euo pipefail

cd "$(dirname "$0")/.."
SRC=public/presentations/volume-viewer
OUT=public/clips
mkdir -p "$OUT"

W=1280
H=672
FPS=24
FIT="scale=${W}:${H}:force_original_aspect_ratio=increase,crop=${W}:${H}"

# slug | source | in-point (s) | duration (s) | x264 crf
# Histology (whole-slide) is high-entropy and needs a harder crf to stay ~2 MB.
CLIPS='
open-a-volume        open-a-volume.mp4        11 12 28
annotate-by-probing  annotate-by-probing.mp4  34 12 28
example-meshes       example-meshes.mp4        2 12 28
flim-data            flim-data.mp4             4 10 28
whole-slide-imaging  whole-slide-imaging.mp4   3 10 31
'

echo "$CLIPS" | while read -r slug file start dur crf; do
  [ -z "$slug" ] && continue
  in="$SRC/$file"
  echo "== $slug ($file @ ${start}s +${dur}s, crf $crf)"

  # Seek a second early on the input, then trim the second on the output:
  # exact-seeking straight to the in-point leaves a black first frame on the
  # variable-frame-rate screen recordings.
  ffmpeg -nostdin -v error -y -ss "$((start - 1))" -i "$in" -ss 1 -t "$dur" -an \
    -vf "${FIT},fps=${FPS}" \
    -c:v libx264 -profile:v high -preset slow -crf "$crf" \
    -pix_fmt yuv420p -movflags +faststart \
    "$OUT/$slug.mp4"

  # Poster = the clip's own first frame, so the swap from still to video is seamless.
  ffmpeg -nostdin -v error -y -i "$OUT/$slug.mp4" -frames:v 1 -q:v 4 "$OUT/$slug.jpg"
done

echo
ls -la "$OUT"
