---
sidebar_position: 8
---

# Troubleshooting

Solutions for common issues with Aerion.

## Connection Issues

### "Connection failed" errors

If you can't connect to your email server:

1. **Check your internet connection** - Ensure you can reach other websites
2. **Verify server settings** - Double-check the server hostname and port
3. **Check firewall/antivirus** - Ensure ports 993 (IMAP) and 465/587 (SMTP) aren't blocked
4. **Try a different network** - Some networks block email ports

### OAuth token expired

For Gmail and Outlook accounts:

1. Go to **Settings > Accounts**
2. Click **Edit** on the affected account
3. Click **Re-authorize**
4. Complete the OAuth flow in your browser

### "Certificate error" or SSL issues

- Ensure you're using the correct security setting (SSL/TLS vs STARTTLS)
- Check that the server hostname matches the certificate
- For self-hosted servers, ensure the certificate is valid

## Sync Problems

### Messages not appearing

If emails you expect to see aren't showing up:

1. **Check sync period** - By default, Aerion syncs the last 180 days
   - Go to **Settings > Accounts > Edit** to change this
2. **Check the folder** - Ensure you're looking in the correct folder
3. **Wait for sync** - Large mailboxes can take time to sync initially
4. **Sync Folder** - Select the folder, click the sync icon, and choose **Sync Folder**
5. **Force Re-sync** - If that doesn't help, click the sync icon and choose **Force Re-sync**

### Slow initial sync

First-time sync of large mailboxes can take several minutes. The sync progress is shown in the status bar. Let it complete before expecting all messages.

### Sync appears stuck

If a sync seems to be stuck or unresponsive, click the sync button in the bottom left corner to stop it, then click again to restart the sync.

### Sent messages not appearing in Sent folder

Some servers handle sent mail differently:

1. Check that the Sent folder is correctly mapped in account settings
2. Some providers automatically copy sent mail; others require the client to do it

### Folders not appearing

1. Select the folder, click the sync icon, and choose **Force Re-sync**
2. Check if the folder exists in your provider's web interface
3. Some folders may be hidden by your email provider

## Gmail Issues

### "Access denied" or authentication errors

- Your OAuth token may have expired - re-authorize the account
- If using app password, verify it's correct and still active
- Check if your organization has restrictions on third-party apps

### OAuth not working

Try the app password method instead:

1. Generate an app password in Google Account settings
2. Remove and re-add your account using app password authentication

### "This app isn't verified" warning

This is expected for open-source applications. To proceed:

1. Click **Advanced**
2. Click **Go to Aerion (unsafe)**
3. Complete the authorization

## Outlook Issues

### Can't connect with regular password

Outlook/Microsoft 365 requires OAuth authentication. Password-based authentication is not supported.

Use **Sign in with Microsoft** when adding your account.

### "Need admin approval" error

Your organization's administrator has restricted third-party applications. Contact your IT department to request access, or check if your organization has specific email client requirements.

### Missing calendar or contacts permissions

Aerion only requests email and contact permissions. Calendar integration is not currently available.

## Linux-Specific Issues

### App won't start

Ensure WebKit2GTK is installed:

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

### No desktop icon after installation

For AppImage users:

1. Use [AppImageLauncher](https://github.com/TheAssassin/AppImageLauncher) for automatic integration
2. Or log out and back in
3. Or manually refresh the icon cache:
   ```bash
   gtk-update-icon-cache
   ```

### Notifications not working

Ensure you have a notification daemon running. On GNOME, notifications work automatically. On other desktops, you may need to install and configure a notification daemon.

### AppImage won't run

Make sure it's executable:
```bash
chmod +x Aerion-*.AppImage
```

If you get a FUSE error, either:
- Install fuse2: `sudo apt install libfuse2` (Debian/Ubuntu)
- Extract and run directly: `./Aerion-*.AppImage --appimage-extract-and-run`

## macOS-Specific Issues

### "App is damaged" or "can't be opened" error

This happens because Aerion isn't signed with an Apple Developer certificate.

**Solution 1:** Right-click and Open
1. Right-click (or Control-click) on Aerion.app
2. Select "Open"
3. Click "Open" in the dialog

**Solution 2:** Remove quarantine attribute
```bash
xattr -cr /Applications/Aerion.app
```

### App crashes on startup

Try removing the configuration and starting fresh:
```bash
rm -rf ~/Library/Application\ Support/aerion
```

## Windows-Specific Issues

### Blank window on startup

This usually indicates a WebView2 issue:

1. Download the latest [WebView2 Runtime](https://developer.microsoft.com/en-us/microsoft-edge/webview2/) from Microsoft
2. Install it and restart Aerion

### Installation blocked by SmartScreen

Click "More info" and then "Run anyway" to proceed with installation.

### Antivirus blocking Aerion

Some antivirus software may flag Aerion as suspicious (common for new applications). Add an exception for Aerion in your antivirus settings.

## Contact Sync Issues

### CardDAV not discovering address books

- Verify the URL includes the full path to the DAV endpoint
- Common formats:
  - Nextcloud: `https://server/remote.php/dav`
  - Radicale: `https://server/user/`
  - Baikal: `https://server/dav.php`
- Check your username and password
- Ensure the server supports CardDAV (not just CalDAV)

### Google/Microsoft contacts empty

- Ensure you granted contacts permission during OAuth authorization
- Try removing and re-adding the contact source
- Check that you have contacts in your Google/Microsoft account

### Contacts not appearing in autocomplete

- Verify the contact source shows a recent sync time
- Try manually syncing: **Settings > Contacts > Sync Now**
- Ensure contacts have email addresses (contacts without email won't appear)

## Getting More Help

If your issue isn't covered here:

1. Check the [GitHub Issues](https://github.com/hkdb/aerion/issues) for similar reports
2. Open a new issue with:
   - Your operating system and version
   - Aerion version
   - Steps to reproduce the problem
   - Any error messages you see
   - Relevant log files (see [FAQ](/docs/faq#where-are-log-files-located) for locations)
