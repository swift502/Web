from pathlib import Path

# Base directory relative to script location
BASE_DIR = Path(__file__).parent.resolve() / "projects"

# Iterate only over immediate subfolders of ./projects
for project_dir in BASE_DIR.iterdir():
    if not project_dir.is_dir():
        continue

    jpg_path = project_dir / "thumb.jpg"

    if jpg_path.exists():
        print(f"Deleting: {jpg_path}")
        jpg_path.unlink()   # delete the file
