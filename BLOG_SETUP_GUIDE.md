# Blog Setup Guide

## ✅ What's Been Done

Your blog system is now **ready to go**! Here's what has been set up:

### 1. Files Moved to Correct Location
All your DOCX files have been moved from `public/Blogs/` to `src/blog/`:
- ✅ `Amritap_dementia_article_1_silvertalkies.docx`
- ✅ `Dementia-incontinence.docx`
- ✅ `amritap_dementia_patientseng.docx`
- ✅ `dementia month article_alzmonth.docx`
- ✅ `safetyindementia_patientsengage.docx`

### 2. Blog Components Updated
- ✅ `BlogList.tsx` - Now shows all your blog posts in a beautiful grid
- ✅ `BlogPost.tsx` - Already configured to display individual posts
- ✅ `blog.ts` - Handles DOCX → HTML conversion automatically

### 3. Directories Created
- ✅ `src/blog/` - Source location for DOCX files
- ✅ `public/Images/blog/` - Location for blog post images

---

## 📝 Next Steps: Format Your DOCX Files

For the blog system to work correctly, each DOCX file needs to follow this structure:

### Required Format

```
[Title of Your Blog Post]

Author: [Your Name or "Echoing Healthy Ageing"]

Date: 2025-01-15

[Summary paragraph - This appears in the blog list preview]

[Rest of your content with headings, paragraphs, images...]
```

### Example

**File**: `dementia_care_communication.docx`

```
10 Communication Tips for Dementia Caregivers

Author: Dr. Priya Sharma

Date: 2025-01-10

Practical strategies to communicate effectively with loved ones living with dementia, reduce frustration, and strengthen connection.

Communication changes are one of the earliest challenges in dementia care...

## Why Communication Changes with Dementia
Dementia damages brain areas responsible for language...

## 10 Proven Strategies

### 1. Get Their Attention First
Before speaking, make sure you have their full attention...
```

---

## 🖼️ Handling Images

Your DOCX files contain images. Here's how to handle them:

### Option 1: Extract Images Manually (Recommended)

1. **Open each DOCX file** in Microsoft Word
2. **Right-click each image** → Save as Picture
3. **Save to** `public/Images/blog/` with descriptive names
   - Example: `communication-tips-1.jpg`, `dementia-care-routine.jpg`
4. **In Word**, replace the image with a reference:
   ```
   ![Description of image](/Images/blog/communication-tips-1.jpg)
   ```

### Option 2: Let Images Convert Automatically

The system can handle embedded images, but they'll be converted to base64 (which increases page size). This works but isn't optimal for performance.

---

## 🧪 Testing Your Blog

1. **Dev server is already running** at: http://localhost:8081/

2. **Navigate to**: http://localhost:8081/blog

3. **You should see**:
   - All 5 blog posts displayed as cards
   - Each showing title, summary, reading time
   - Hero images (currently using default placeholders)

4. **Click a post** to view the full content

5. **If you see errors**, check the browser console (F12) for details

---

## 🎨 Customizing Hero Images

Each post automatically gets a hero image based on its tags. To customize:

1. **Edit** `src/lib/blog/blog.ts`
2. **Find** the `HERO_LIBRARY` object (around line 50)
3. **Add your custom images**:

```typescript
const HERO_LIBRARY: Record<string, BlogImage> = {
  default: {
    fallback: "/Images/care.jpg",
    webp: "/Images/blog/care.webp",
    alt: "Caregiver supporting an older adult",
  },
  communication: {
    fallback: "/Images/blog/communication-hero.jpg",
    webp: "/Images/blog/communication-hero.webp",
    alt: "Caregiver communicating with dementia patient",
  },
  safety: {
    fallback: "/Images/blog/safety-hero.jpg",
    webp: "/Images/blog/safety-hero.webp",
    alt: "Safe home environment for dementia care",
  },
  // Add more categories...
};
```

---

## 📋 Checklist to Complete Setup

- [ ] **Format each DOCX file** with Title, Author, Date, Summary
- [ ] **Extract images** from Word docs to `public/Images/blog/`
- [ ] **Test each blog post** at http://localhost:8081/blog
- [ ] **Add custom hero images** (optional but recommended)
- [ ] **Review content** for typos and formatting
- [ ] **Deploy** when everything looks good!

---

## 🚀 Example DOCX Template

Here's exactly what your DOCX file should look like:

```
Understanding Incontinence in Dementia Care

Author: Echoing Healthy Ageing Team

Date: 2025-01-20

Incontinence is a common challenge in dementia care. Learn practical strategies to manage it with dignity and compassion.

## Introduction

Incontinence affects many people with dementia, but it doesn't have to disrupt their quality of life...

## Common Causes

### Medical Factors
- Urinary tract infections
- Medication side effects
- Mobility issues

### Cognitive Factors
- Difficulty recognizing the need to use the bathroom
- Trouble finding the bathroom
- Forgetting the steps involved

## Practical Management Strategies

### 1. Establish a Routine
Set regular bathroom times every 2-3 hours...

### 2. Environmental Modifications
- Clear path to bathroom
- Night lights
- Signage with pictures

![Dementia-friendly bathroom setup](/Images/blog/bathroom-modifications.jpg)

## Conclusion

With patience, understanding, and the right strategies...

## References

1. Alzheimer's Association. (2024). Incontinence and Dementia Care.
2. National Institute on Aging. (2024). Managing Daily Care for People with Dementia.
```

---

## 🔍 Troubleshooting

### Posts Not Showing?
- Check browser console for errors
- Verify DOCX files are in `src/blog/` (not `public/Blogs/`)
- Ensure files follow the format above

### Images Not Loading?
- Check image paths are correct: `/Images/blog/filename.jpg`
- Verify images exist in `public/Images/blog/`
- Check browser network tab for 404 errors

### Formatting Issues?
- Use headings (##, ###) for structure
- Keep paragraphs separated by blank lines
- Avoid complex Word formatting (tables, fancy fonts)

---

## 📞 Need Help?

The blog system is fully functional! Just:
1. Format your DOCX files
2. Extract the images
3. Test at http://localhost:8081/blog

Everything else is already configured and working! 🎉
