# Specification

## Summary
**Goal:** Update the Memory Gallery to show only the latest 4 uploaded photos and ensure the gallery and modal behave correctly across screen sizes.

**Planned changes:**
- Update `frontend/src/components/sections/MemoryGallerySection.tsx` so the Memory Gallery grid renders exactly 4 items using: `IMG-20260217-WA0007-2.jpg`, `IMG-20260217-WA0006-2.jpg`, `IMG-20260217-WA0008-3.jpg`, `IMG-20260217-WA0009-2.jpg`.
- Remove any placeholder/emoji-based memory cards from the Memory Gallery grid.
- Adjust responsive grid layout to present 4 photos cleanly on mobile/tablet/desktop without empty gaps.
- Ensure clicking any of the 4 cards opens the existing modal/dialog showing the same corresponding photo in an expanded view, with a clear close interaction returning to the same gallery position.

**User-visible outcome:** The Memory Gallery displays exactly four real photo cards (the latest uploads). The grid looks balanced on all devices, and clicking a photo opens a larger view of that same photo with smooth close/back behavior.
