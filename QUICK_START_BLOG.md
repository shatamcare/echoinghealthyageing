# Quick Start: Format Your First Blog Post

## Step-by-Step Instructions

### 1. Open Your DOCX File in Microsoft Word

Choose one of your files to start with, for example:
- `Amritap_dementia_article_1_silvertalkies.docx`

### 2. Add Metadata at the Top

At the **very beginning** of your document, add these 3 lines:

```
Author: [Your Name]

Date: 2025-01-15
```

**Example**:
```
10 Communication Tips for Dementia Caregivers

Author: Dr. Amrita Patnaik

Date: 2025-01-10

[Rest of your content...]
```

### 3. Add a Summary Paragraph

Right after the Date line, add a **summary paragraph** (1-2 sentences):

```
Date: 2025-01-10

Learn practical strategies to communicate effectively with loved ones living with dementia and strengthen your connection.

[Main content starts here...]
```

This summary will appear in the blog list preview.

### 4. Format Your Content

Use Word's heading styles:
- **Heading 2** for main sections
- **Heading 3** for subsections
- Regular paragraphs for body text

**Example structure**:
```
Title (Heading 1 or just first line)
Author: Name
Date: YYYY-MM-DD
Summary paragraph

## Introduction (Heading 2)
Body text here...

## Main Section (Heading 2)

### Subsection (Heading 3)
Body text here...

## Conclusion (Heading 2)
Final thoughts...
```

### 5. Handle Images

**For each image in your document**:

#### Option A: Keep It Simple (Recommended for testing)
1. Just leave images as they are
2. They'll be converted automatically (but may be slow)

#### Option B: Optimize for Performance
1. Right-click the image → "Save as Picture"
2. Save to `public/Images/blog/` with a descriptive name
   - Example: `dementia-communication-tips-header.jpg`
3. In Word, **replace** the image with this text:
   ```
   ![Caregiver communicating with elderly person](/Images/blog/dementia-communication-tips-header.jpg)
   ```

### 6. Save Your Changes

Save the DOCX file in `src/blog/` (it's already there, just save your edits).

### 7. Test in Browser

1. Go to http://localhost:8081/blog
2. Refresh the page (Ctrl+R or Cmd+R)
3. You should see your updated post!
4. Click on it to view the full content

---

## Complete Example

Here's what `Amritap_dementia_article_1_silvertalkies.docx` should look like:

```
Understanding Dementia: A Guide for Families in Mumbai

Author: Dr. Amrita Patnaik

Date: 2025-01-08

Dementia affects thousands of families in Mumbai. This guide helps you understand the condition, recognize early signs, and access local support services.

## What is Dementia?

Dementia is not a single disease, but a term that describes a collection of symptoms affecting memory, thinking, and social abilities severely enough to interfere with daily functioning.

### Common Types

1. Alzheimer's Disease (60-80% of cases)
2. Vascular Dementia
3. Lewy Body Dementia
4. Frontotemporal Dementia

## Early Warning Signs

### Memory Loss
- Forgetting recently learned information
- Repeatedly asking the same questions
- Increasingly needing memory aids

![Early signs of dementia infographic](/Images/blog/dementia-early-signs.jpg)

### Communication Difficulties
- Trouble finding the right words
- Following or joining conversations becomes challenging
- Repeating stories or questions

## Support in Mumbai

### Medical Resources
- **KEM Hospital**: Specialized geriatric care
- **Jaslok Hospital**: Memory clinic services
- **Echoing Healthy Ageing**: Home-based dementia care

### Community Support
- Memory cafés in Bandra and Andheri
- Caregiver support groups
- Telehealth consultations available

## When to Seek Help

If you notice several of these signs persisting for weeks or months, consult a specialist. Early diagnosis allows for:
- Better treatment outcomes
- Time to plan for the future
- Access to support services
- Participation in clinical trials

## Conclusion

Living with dementia in Mumbai doesn't mean facing it alone. With proper support, care, and community resources, families can navigate this journey with dignity and hope.

## References

1. Alzheimer's & Related Disorders Society of India (ARDSI)
2. World Health Organization - Dementia Fact Sheet
3. Indian Journal of Psychiatry - Dementia in India
```

---

## Testing Checklist

After editing your DOCX file:

- [ ] ✅ First line is the title
- [ ] ✅ Second line starts with "Author:"
- [ ] ✅ Third line starts with "Date:" in format YYYY-MM-DD
- [ ] ✅ Fourth line/paragraph is a summary (1-2 sentences)
- [ ] ✅ Content uses headings (## and ###)
- [ ] ✅ Images are either embedded or referenced as markdown
- [ ] ✅ File is saved in `src/blog/`
- [ ] ✅ Test page refreshed at http://localhost:8081/blog

---

## Pro Tips

1. **File naming**: Use descriptive filenames (they become the URL slug)
   - Good: `dementia-communication-tips.docx` → `/blog/dementia-communication-tips`
   - Avoid spaces - use hyphens instead

2. **Image sizes**: Keep images under 500KB for fast loading
   - Resize to max 1200px width before adding to Word

3. **Summary length**: Keep summaries to 100-150 characters for best display

4. **Tags**: The system automatically generates tags from your content
   - Words like "dementia", "caregiver", "Mumbai" become tags
   - Tags help with search and categorization

---

## What Happens Next?

Once your blog posts are formatted:

1. **They appear automatically** at `/blog`
2. **Each post gets**:
   - A unique URL (based on filename)
   - SEO metadata
   - Structured data for Google
   - Automatic reading time calculation
   - Social sharing optimization

3. **No manual updates needed**:
   - Just edit the DOCX file
   - Save it
   - Refresh the browser
   - Changes appear instantly!

---

## Ready to Start?

1. Open `Amritap_dementia_article_1_silvertalkies.docx`
2. Add the Author and Date lines
3. Save it
4. Refresh http://localhost:8081/blog
5. See your blog post live! 🎉

The dev server is already running - start editing and testing! 🚀
