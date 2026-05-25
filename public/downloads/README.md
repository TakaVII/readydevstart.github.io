# Downloads

Place downloadable files (PDFs, documents, etc.) in this directory.
They are served from `/downloads/` at the site root.

Use the `FileDownload` Astro component to display download links:

```astro
import FileDownload from "../../components/FileDownload.astro";

<FileDownload
  name="Game Design Document Template"
  href="/downloads/gdd-template.pdf"
  type="PDF"
  size="2.4 MB"
  description="A ready-to-use GDD template."
/>
```
