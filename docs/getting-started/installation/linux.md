---
sidebar_position: 1
pagination_next: getting-started/verify
---

# Linux

## Flatpak

Aerion has been submitted to Flathub and it's currently under review. Meanwhile, if you want to install with Flatpak, you can download the latest `.flatpak` file from the [release page](https://github.com/hkdb/aerion/releases) and install it by running the following command in the directory you downloaded it to:

```bash
flatpak --user install Aerion-<VERSION>-<ARCH>.flatpak
```

## Binary + Desktop File + Icon
---

If you prefer to use the binary which is most heavily tested:

1. Aerion requires WebKit2GTK. On a lot of distributions this is already installed, but if it's not, install it on your system:

Debian/Ubuntu:

```bash

sudo apt install libwebkit2gtk-4.1-0
```
Fedora:

```bash
sudo dnf install webkit2gtk4.1
```
Arch Linux:

```bash
sudo pacman -S webkit2gtk-4.1
```

2. Download the latest tarball for:

- [amd64](https://github.com/hkdb/aerion/releases/latest/download/aerion-linux-amd64.tar.gz)
- [arm64](https://github.com/hkdb/aerion/releases/latest/download/aerion-linux-arm64.tar.gz)

3. Untar and install:

```bash
tar -xzvf aerion-linux-*.tar.gz
cd aerion-linux-<arch>
./install.sh
# This install script will give you a choice to install it system-wide or just for the user.
# Follow the prompts and complete the installation.
```


## AppImage
---

It was impossible to maintain an AppImage for a `webkit2gtk-4.1` dependent app that would be compatible with all distros. As such, the AppImage build has been removed from the release/distribution workflow.
