---
summary: "Workspace template for TOOLS.md"
read_when:
  - Bootstrapping a workspace manually
---

# TOOLS.md - Local Notes

Skills define _how_ tools work. This file is for _your_ specifics — the stuff that's unique to your setup.

## What Goes Here

Things like:

- Camera names and locations
- SSH hosts and aliases
- Preferred voices for TTS
- Speaker/room names
- Device nicknames
- Anything environment-specific

## Examples

```markdown
### Cameras

- living-room → Main area, 180° wide angle
- front-door → Entrance, motion-triggered

### SSH

- home-server → 192.168.1.100, user: admin

### TTS

- Preferred voice: "Nova" (warm, slightly British)
- Default speaker: Kitchen HomePod
```

## Why Separate?

Skills are shared. Your setup is yours. Keeping them apart means you can update skills without losing your notes, and share skills without leaking your infrastructure.

---

## Current Setup

### VPS / Docker
- **Provider:** Hostinger VPS
- **Container:** OpenClaw Docker
- **Workspace:** `/data/.openclaw/workspace/`
- **SSH:** Hostinger panelinde mevcut (root@[VPS_IP])

### File Access
```bash
# Host makineden container'a erişim
docker ps  # Container ID'yi bul
docker cp [CONTAINER_ID]:/data/.openclaw/workspace/dosya.html ./

# Container içinden dosyaları listele
ls -la /data/.openclaw/workspace/
```

---

Add whatever helps you do your job. This is your cheat sheet.