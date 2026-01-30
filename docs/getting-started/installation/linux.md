---
sidebar_position: 1
pagination_next: getting-started/verify
---

# Linux

## AppImage
---

1. Download the latest `AppImage`:
    - [amd64](https://github.com/hkdb/aerion/releases/latest/download/Aerion-linux-amd64.AppImage)
    - [arm64](https://github.com/hkdb/aerion/releases/latest/download/Aerion-linux-arm64.AppImage)
    
    If you are running a recent immutable/atomic distro, you may want to use these AppImages instead:
    - [amd64](https://github.com/hkdb/aerion/releases/latest/download/Aerion-linux-amd64-atomic.AppImage)
    - [arm64](https://github.com/hkdb/aerion/releases/latest/download/Aerion-linux-arm64-atomic.AppImage)
2. Make it executable:
   ```bash
   chmod +x Aerion-*.AppImage
   ```
3. Run the AppImage:
   ```bash
   ./Aerion-*.AppImage
   ```

### Desktop Integration

To add Aerion to your application menu, you can use a tool like:

- [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher)
- [app](https://github.com/hkdb/app)
- Manually extract `aerion.desktop` and `aerion.png` to place in `/usr/share/applications` & `/usr/share/icons`

## Binary + Desktop File + Icon
---

If you prefer to use the binary which is most heavily tested:

- download the latest standalone binary and place in a location in your `$PATH` :
    - [amd64](https://github.com/hkdb/aerion/releases/latest/download/aerion-linux-amd64)
    - [arm64](https://github.com/hkdb/aerion/releases/latest/download/aerion-linux-arm64)
- Download `.desktop` [file](https://github.com/hkdb/aerion/releases/latest/download/aerion.desktop) and add to `~/.local/share/applications` or `/usr/share/applications`.
- Download [icon](https://raw.githubusercontent.com/hkdb/aerion/main/build/linux/aerion.png) and place in `~/.local/share/icons` or `/usr/share/icons`.

### Dependencies

Aerion requires WebKit2GTK. On most distributions this is already installed, but if you encounter issues:

**Debian/Ubuntu:**
```bash
sudo apt install libwebkit2gtk-4.1-0
```

**Fedora:**
```bash
sudo dnf install webkit2gtk4.1
```

**Arch Linux:**
```bash
sudo pacman -S webkit2gtk-4.1
```
