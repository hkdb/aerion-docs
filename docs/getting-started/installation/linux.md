---
sidebar_position: 1
pagination_next: getting-started/verify
---

# Linux

## Flatpak

Aerion has not been submitted to Flathub yet. Meanwhile, if you want to install with Flatpak, you can download the latest `.flatpak` file from the [release page](https://github.com/hkdb/aerion/releases) and install it by running the following command in the directory you download it to:

```bash
flatpak --user install Aerion-<VERSION>.flatpak
```

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
sudo dnf install webkit2gtk4.1gtk
```

**Arch Linux:**
```bash
sudo pacman -S webkit2gtk-4.1
```

## AppImage
---

It was impossible to maintain an AppImage for a `webkit2gtk-4.1` dependent app that would be compatible with all distros. As such, the AppImage build has been removed from the release/distribution workflow.
