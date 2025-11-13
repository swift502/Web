from pathlib import Path
from PIL import Image

# Base directory relative to script location
BASE_DIR = Path(__file__).parent.resolve() / "projects"

# Iterate only over immediate subfolders of ./projects
for project_dir in BASE_DIR.iterdir():
    if not project_dir.is_dir():
        continue

    jpg_path = project_dir / "thumb.jpg"
    webp_path = project_dir / "thumb.webp"

    if jpg_path.exists():
        # print(f"Processing: {jpg_path}")

        with Image.open(jpg_path) as img:
            # Scale width to 640 while preserving aspect ratio
            w_percent = 640 / float(img.width)
            new_height = int(img.height * w_percent)
            resized = img.resize((640, new_height), Image.LANCZOS)

            # Warn if height is not exactly 400px
            if new_height != 400:
                print(f"WARNING: {jpg_path} scaled height is {new_height}px (expected 400px)")
            else:
                print(f"Height OK")

            # Save as WebP
            resized.save(webp_path, "WEBP", quality=90)

        # print(f"Saved: {webp_path}")
