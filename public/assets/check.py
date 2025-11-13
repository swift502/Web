from pathlib import Path
from PIL import Image

# Base directory relative to script location
BASE_DIR = Path(__file__).parent.resolve() / "projects"

# Iterate only over immediate subfolders of ./projects
for project_dir in BASE_DIR.iterdir():
    if not project_dir.is_dir():
        continue

    webp_path = project_dir / "thumb.webp"

    if webp_path.exists():
        with Image.open(webp_path) as img:
            width, height = img.size
            print(f"{width}x{height}")
