# Arkitekt Documentation Style & Concept Guide

This document serves as a guide for AI agents and human contributors to understand the core concepts of Arkitekt and maintain the established documentation style.

## 1. Core Concepts & Philosophy

**Arkitekt** is a platform and framework for modern bioimage analysis workflows. It is **not** a monolithic tool that replaces existing software (like ImageJ, Napari, or Python scripts). Instead, it acts as a **"Middleman"**.

*   **The Middleman Approach**: Arkitekt connects diverse tools. It manages data flow, orchestration, and metadata, allowing users to "bring your own tools" and connect them in real-time workflows.
*   **API First**: Every feature is exposed via **GraphQL**. There are no hidden internal APIs. If it can be done in the GUI, it can be done via the API.
*   **Modular Architecture**: The system is composed of distinct services that can be used independently or together.

### The Service Stack
*   **Mikro**: The "Brain" for data. Manages microscopy images, ROIs, and metadata.
    *   *Tech*: GraphQL + Postgres (Metadata) + S3/Minio (Binary Data).
*   **Rekuest**: The "Nervous System". Handles task assignment, routing, and RPC between apps.
    *   *Tech*: GraphQL + RabbitMQ/Redis. Stateless design.
*   **Fluss**: The "Flow". Manages workflow definitions and execution (implied context).
*   **Lok**: The "Gatekeeper". Handles authentication and user management (implied context).

## 2. Documentation Style & Tone

The documentation style is **informal, encouraging, and developer-centric**.

*   **Tone**: Friendly and conversational. Use "We" (the Arkitekt team) and "You" (the developer/user).
    *   *Example*: "Something's cooking...", "Build on the Shoulder of Giants", "Hi!".
*   **Audience**: Bioimage analysts who code, and developers building tools for scientists.
*   **Format**: **MDX** (Markdown + JSX).
*   **Visuals**: Heavy use of diagrams and images to explain abstract concepts.
    *   Use `<Image img={importedImage} />` for optimized images.
*   **Interactivity**: Use `jsx live` code blocks for React examples to demonstrate the GraphQL API.
*   **Callouts**: Use Docusaurus admonitions (`:::note`, `:::warning`) frequently to highlight work-in-progress features or important context.

### Writing Rules
1.  **Be Honest**: Acknowledge limitations (e.g., "We are currently rewriting this...").
2.  **Contextualize**: Explain *why* a decision was made (e.g., "Why not REST?").
3.  **Empower**: Focus on what the user can build or achieve.

## 3. Streamlining Opportunities

To improve the documentation, consider the following:

*   **Typos & Grammar**: There are frequent minor typos (e.g., "higly", "costumizable", "dicussing"). A proofreading pass is needed.
*   **Redundancy**: The "Why Arkitekt?" value proposition is repeated in `intro.mdx`, `developers/index.mdx`, and `design/middleman.md`. These could be consolidated into a single "Philosophy" page referenced elsewhere.
*   **Service Clarity**: The distinction between services (Mikro vs. Rekuest) is clear in the `design/` folder but could be better highlighted in the `intro` for new users.
*   **Status Indicators**: The "Something's cooking" warning is vague. Use specific version badges or "Beta" tags for features.

## 4. Potential User Errors & Pitfalls

*   **GraphQL Learning Curve**: Users coming from REST might struggle with the declarative nature of GraphQL.
    *   *Mitigation*: Provide more "Copy/Paste" query examples for common tasks (e.g., "Get all images", "Run a specific task").
*   **Service Confusion**: Users might not know *which* service endpoint to query for a specific task (e.g., querying Rekuest for images instead of Mikro).
    *   *Mitigation*: Clearly label API endpoints and provide a "Service Map".
*   **Connection & Auth**: Connecting local apps (e.g., a Python script on a laptop) to a remote Arkitekt server involves authentication and networking (RabbitMQ/Redis). This is a common failure point.
    *   *Mitigation*: Create a dedicated "Connectivity Troubleshooting" guide.
*   **"Bring Your Own Tool" Complexity**: "Containerizing" a legacy script to work as an Arkitekt Node can be daunting.
    *   *Mitigation*: Provide a "Hello World" boilerplate for Python and JavaScript nodes.

## 5. Summary for AI Generation

When generating new documentation for Arkitekt:
1.  Start with a friendly greeting or hook.
2.  Explain the concept using a metaphor (Middleman, Bridge, etc.).
3.  Provide a technical deep-dive using GraphQL examples.
4.  End with a call to action (e.g., "Try it out in the Explorer").
5.  Keep the formatting clean with MDX components.
