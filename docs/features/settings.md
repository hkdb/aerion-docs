---
sidebar_position: 6
---

# Settings

Configure Aerion to work the way you prefer.

Access settings by clicking the **gear icon** in the sidebar or navigating to the Settings view.

## General Tab
---

### Title Bar

- **Aerion** (Default) - Built-in title bar matching Aerion's themes
- **Native** (Requires Restart) - Use the OS native title bar and window decorations
- **Disable** - Some users that are running tiling window managers or simply prefer a more minimalistic look and feel, the title bar can be completely disabled.

### Language

Choose the language you want the UI to use. Current, Aerion supports:

- **English**
- **中文（香港)**
- **中文 (台湾)**
- **中文 (中国)**

Other languages will be added in future releases.

### Theme

Choose your visual theme:

- **System** - Follows your operating system's light/dark preference
- **Light** - Always use default light theme (Purple accent)
- **Light (Blue)** - Always use light theme with blue accent
- **Light (Orange)** - Always use light theme with orange accent
- **Light (Balanced)** - A less bright light mode with gray accent
- **Dark** - Always use default dark theme (Purple accent)
- **Dark (Gray)** - Always use Gray on gray dark theme
- **Dark (Balanced)** - A slightly lighter dark mode with gray accent

### Message Density

Control how compact the message list appears:

- **Micro** - Minimal spacing, maximum messages visible
- **Compact** - Reduced spacing
- **Standard** - Default balanced spacing
- **Large** - More spacing for easier reading

### Always Load Remote Images

If toggled on, image blocking for all emails will be disabled. Remote images will load automatically instead of requiring the users to manually load images or setting always load rules based on domain or address.

### Auto-Mark as Read

Set how long a message must be viewed before marking it as read:

- **Immediately** - Mark read as soon as opened
- **After 1 second**
- **After 2 seconds**
- **After 5 seconds**
- **Never** - Only mark read manually

### Background

**Run in background** - Enable this if you want Aerion to not exit but run in the background when you close the Aerion window. This setting is also a pre-requisite for the next toggle to be enabled.
**Starts hidden on launch** - Enable this if you want Aerion to launch in the background on first launch without showing the window.

### Startup

**Autostart on login** - Enable this if you want Aerion to automatically launch when you login to your system.
## Composer Tab
---

### Default Compose Mode

Choose whether composing opens in the main window or a separate window when you press the **Compose** button or **Ctrl+N**.

Options:

- **In window** (Default)
- **Detached window**

### External mailto Links

Choose how `mailto` links from other apps are handled.

Options:

- **In window** (Default)
- **Detached window**

### Default Message Format

New messages will use this format by default in the composer. You can still switch per message.

Options:

- **Rich text** (Default)
- **Plain text**

### Read Receipts

Configure how Aerion handles read receipt requests:

- **Never send** - Ignore all read receipt requests
- **Ask** - Prompt when a sender requests a read receipt
- **Always send** - Automatically send read receipts

## Accounts Tab
---

Manage your email accounts.

### Add Account

Click **Add Account** to add a new email account. See [First Account Setup](/docs/getting-started/first-account) for details.

### Edit Account

Click **Edit** on any account to modify:

#### General Tab

- **Account Color** - Color used in unified inbox
- **Account Name** - Display name for this account
- **Default Display Name** - The name people see the e-mail is from when you send e-mails
- **Email Address** - Your email address (read-only for OAuth accounts)
- **Username** - Username of your account
- **Password** - Password of your account
- **Sync Period** - How far back to sync (30, 90, 180 days, or all)

#### Identity Tab

Manage sending identities for this account:

- **Name** - Display name for outgoing mail
- **Email** - Sending address
- **Signature** - Rich text signature appended to messages

You can have multiple identities per account (e.g., for aliases).

#### Server Tab

For non-OAuth accounts:

- **Incoming Mail** - IMAP server, port, and security
- **Outgoing Mail** - SMTP server, port, and security
- **Check for New Mail** - How often to check for new messages outside of IDLE
- **Request Read Receipts** - When to request read receipts for outgoing messages
- **Server Mapping** - Map special folders if not auto-detected:
    - Sent folder
    - Drafts folder
    - Trash folder
    - Archive folder
    - Spam folder
- **Trusted Certificates** - Manually trusted TLS certificates for this account's servers.

#### Security Tab

- **PGP** - PGP/GPG signing and encryption settings of your account
    - **Import Secret Keys** - Import your PGP secret key
    - **Key Servers** - A list of key servers to use. There are 3 defaults already. You can also add your own here
    - **Recipient Keys**
        - **Import** - Import public keys of your contacts 
        - **Search** - Search for public keys. Starts with WKD and then searches key servers 
        - **List** - There's a list below the above 2 buttons that shows the current stored public keys
- **S/MIME** - S/MIME cert based signing and encryption settings for your account
    - **Import .p12** - Import your .p12 certificate. Imported certificate will appear below
    - **Import** - Import recipient certificates here. Imported or auto-collected public certs will appear below

### Remove Account

Click **Remove** to delete an account. This removes:

- The account configuration
- Locally cached emails from this account

Your emails on the server are not affected.

### Re-authorize OAuth

For Gmail and Outlook accounts, click **Re-authorize** if:

- Your token has expired
- You've changed your password
- You've revoked permissions and want to re-grant them

## Contacts Tab
---

Manage contact sources for autocomplete.

### Add Contact Source

Add a new source for contact sync:

- **CardDAV** - Connect to a CardDAV server
- **Google Contacts** - Sync from Google
- **Microsoft Contacts** - Sync from Microsoft

See [Contacts](/docs/features/contacts) for detailed setup.

### Edit Contact Source

Click on a contact source to:

- Change sync interval
- Update credentials
- View sync status

### Sync Now

Click **Sync Now** to immediately fetch contacts from a source.

### Remove Contact Source

Click **Remove** to stop syncing from a contact source. Previously synced contacts remain available until the next restart.

## About Tab
---

View information about Aerion:

- **Version** - Current Aerion version
- **GitHub** - Link to source code and issues
- **Privacy Policy** - How Aerion handles your data
- **Terms of Use** - Usage terms

## Applying Changes
---

Most settings take effect immediately. Some changes (like adding accounts or contact sources) may require a sync before you see results.

## Configuration Location
---

Aerion stores configuration in your system's standard application data location:

| Platform | Location |
|----------|----------|
| Linux | `~/.config/aerion/` or `$XDG_CONFIG_HOME/aerion/` |
| macOS | `~/Library/Application Support/aerion/` |
| Windows | `%APPDATA%\aerion\` |

:::warning
Modifying configuration files directly is not recommended. Use the Settings UI instead.
:::

## Notifications
---

By default on Linux, Aerion uses `org.freedesktop.portal.Desktop` but if you launch Aerion from the terminal, notifications will not work. In those cases, you will want to use the `--dbus-notify` flag to launch Aerion.
