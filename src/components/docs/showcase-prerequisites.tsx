import Link from "next/link";
import { Callout } from "fumadocs-ui/components/callout";

/**
 * Shared prerequisites block for the paper showcases: the "please read the
 * Getting Started guide" callout, the hardware paragraph and the pointer to
 * how this website connects to an Arkitekt instance.
 */
export const ShowcasePrerequisites = () => {
  return (
    <>
      <Callout type="info" title="Please read">
        We <strong>strongly</strong> suggest to go through the{" "}
        <Link href="/docs/introduction/first-steps">Getting Started</Link> guide before
        attempting to run this workflow. It will guide you through the
        installation of the Arkitekt platform and the setup of your first
        workflow, as well as how to install plugins and apps.
      </Callout>
      <p>
        This workflow is designed to run on a microscope computer running Windows
        10 as well as on a remote analysis computer that will power the Arkitekt
        platform and the image analysis. To enable GPU acceleration for the
        Stardist segmentation, the analysis computer needs to have access to a
        CUDA 11 enabled GPU (tested on an Nvidia GeForce RTX 2080Ti). The
        microscope computer will need to be connected to the same network as the
        remote computer.
      </p>
      <p>
        The import and install buttons on this page only work once you have{" "}
        <Link href="/docs/introduction/first-steps/brief-interlude#we-have-an-app-for-that">
          connected this website to your Arkitekt instance
        </Link>
        .
      </p>
    </>
  );
};
