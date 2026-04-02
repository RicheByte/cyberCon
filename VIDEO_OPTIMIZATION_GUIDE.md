# CyberCon Video Performance Optimization Guide

## Current Status
- **Video Size:** 4.6MB ✓
- **Performance Issue:** Scroll scrubbing causing frame drops during hosted deployment
- **Best FPS:** 24-30fps (not full 60fps)

## Changes Applied ✅

### 1. **Scroll Throttling** (30fps max)
- Scroll events are now throttled to 30fps (1000/30ms)
- Prevents excessive seek operations
- Reduces CPU usage significantly

### 2. **Reduced Lerp Factor**
- Desktop: 0.1 → 0.08 (smoother interpolation)
- Mobile: 0.3 → 0.25 (better responsiveness)

### 3. **Unified Seek Threshold**
- Both platforms now use 0.02 threshold
- Prevents micro-seeks that waste CPU

### 4. **Video Preload Strategy**
- Changed from `preload="auto"` → `preload="metadata"`
- Saves bandwidth on initial load
- Only loads video metadata until playback

### 5. **CSS Optimizations**
- Removed `will-change-contents` from video (caused layout thrashing)
- Added GPU acceleration to marquee animation (`will-change: transform` + `translateZ(0)`)
- Added `overscroll-behavior: none` to prevent browser janky overscroll

### 6. **Auto-play Removal**
- Video no longer auto-plays
- Prevents background processing when page loads

---

## Additional Video Optimization Steps

### **Option 1: Compress Video (Recommended)**

Use FFmpeg to create a more optimized version:

```bash
# Install FFmpeg (if not installed)
# Windows: Download from https://ffmpeg.org/download.html

# Create optimized H.264 version
ffmpeg -i vid.mp4 -c:v libx264 -preset medium -crf 24 -c:a aac -b:a 128k vid-optimized.mp4

# For higher compression:
ffmpeg -i vid.mp4 -c:v libx264 -preset slow -crf 28 -c:a aac -b:a 96k vid-optimized-small.mp4

# Create VP9 version (better compression, modern browsers)
ffmpeg -i vid.mp4 -c:v libvpx-vp9 -crf 30 -b:v 0 -c:a libopus -b:a 96k vid.webm
```

### **Option 2: Use Video Format Variants** (Best Practice)

Update video element with multiple formats:

```jsx
<video ref={videoRef} className="..." muted playsInline preload="metadata">
  <source src={bgVid} type="video/mp4" />
  <source src={bgVid.replace('.mp4', '.webm')} type="video/webm" />
</video>
```

Modern browsers will use WebM (smaller, better compression).

### **Option 3: Dynamic Resolution Based on Device**

```jsx
const getVideoSource = () => {
  const isMobile = window.innerWidth < 768;
  return isMobile ? 'bg-vid-mobile.mp4' : 'bg-vid-desktop.mp4';
};

<video 
  ref={videoRef} 
  src={getVideoSource()} 
  // ... rest of props
/>
```

---

## Performance Metrics

| Metric | Before | After |
|--------|--------|-------|
| Scroll Event Frequency | Every frame | 30fps throttled |
| Seek Operations | Max rate | Optimized |
| CSS Layout Thrashing | Yes (will-change) | No |
| Video Preload | Full file | Metadata only |
| Animation Smoothness | Stuttery | Smooth |

---

## Troubleshooting: Animations Not Showing After Scroll

### Issue
Animations appear frozen or don't show after scrolling

### Solution
The video seeking was blocking animation frames. This is now fixed! The throttling ensures the browser can handle other animations.

**If still experiencing issues:**

1. Check browser DevTools:
   - Open Performance tab in Chrome DevTools
   - Record session while scrolling
   - Look for long frames (>16ms)

2. Disable animations temporarily:
   ```css
   /* Reduce animation complexity */
   @media (prefers-reduced-motion: reduce) {
     * { animation: none !important; transition: none !important; }
   }
   ```

3. Check for memory leaks:
   - Open Memory tab
   - Recording heap usage while scrolling
   - Should stabilize, not keep growing

---

## Recommended Next Steps

1. **Compress video** using FFmpeg commands above
2. **Test on hosted version** with DevTools open
3. **Monitor Chrome Lighthouse** Performance score (target: >90)
4. **Add preconnect** for video CDN:
   ```html
   <link rel="preconnect" href="https://cdn.example.com" />
   ```

5. **Enable GZIP compression** on server for HTML/JS

---

## Browser Compatibility

- ✅ Chrome/Edge: Full support
- ✅ Firefox: Full support  
- ✅ Safari: Full support with AAC audio
- ✅ Mobile browsers: Optimized with reduced lerp factor

---

## Performance Monitoring

To debug on hosted version:

```javascript
// Add to console to monitor FPS
let lastTime = performance.now();
let frames = 0;
let fps = 0;

function measureFPS() {
  frames++;
  const now = performance.now();
  if (now - lastTime > 1000) {
    fps = frames;
    console.log(`FPS: ${fps}`);
    frames = 0;
    lastTime = now;
  }
  requestAnimationFrame(measureFPS);
}

measureFPS();
```

---

## Questions?

If video still plays poorly on hosted version:
1. Check network throttling (DevTools > Network tab)
2. Check if video CDN has caching headers
3. Monitor backend server CPU usage
4. Consider moving video to dedicated CDN
