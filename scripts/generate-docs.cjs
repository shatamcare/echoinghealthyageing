const { Document, Packer, Paragraph, HeadingLevel } = require('docx');
const fs = require('fs');
const path = require('path');

const posts = [
  {
    filename: 'caregiver_support_mumbai.docx',
    title: '5 Ways to Support Dementia Caregivers in Mumbai',
    author: 'Echoing Healthy Ageing',
    date: '2024-08-18',
    intro:
      'Caring for a loved one with dementia is a full-time emotional commitment. Families in Mumbai often juggle work, travel, and caregiving without practical guidance.',
    summary: 'These five practices make caregiving sustainable without waiting for a crisis.',
    sections: [
      {
        heading: 'Create Small Rituals of Connection',
        content:
          'Consistent routines lower stress for the person with dementia and give caregivers breathing space. A shared morning chai, evening prayers, or listening to a favorite ghazal can stabilise the day.'
      },
      {
        heading: 'Share the Care with Community',
        content:
          'Mumbai has neighbourhood WhatsApp groups, housing society councils, and local NGOs ready to help. Caregivers who ask for assistance with groceries or errands reduce their chance of burnout by 40%.'
      },
      {
        heading: 'Book Respite Support Early',
        content:
          'Memory Café sessions, home therapy visits, and virtual support circles provide respite before crises happen. Planning these ahead gives caregivers guilt-free downtime.'
      },
      {
        heading: 'Know When to Call a Professional',
        content:
          'When behavioural changes feel overwhelming, dementia-trained counsellors can create a plan. Telehealth sessions offer immediate strategies for sleep disruption, confusion, or wandering.'
      },
      {
        heading: 'Celebrate Every Small Win',
        content:
          'Caregivers often forget to acknowledge their progress. Keep a gratitude notebook, share milestones with the support group, and ask for positive feedback.'
      }
    ]
  },
  {
    filename: 'memory_cafe_guide.docx',
    title: 'A First-Timer’s Guide to Memory Café Sessions',
    author: 'Echoing Healthy Ageing',
    date: '2024-07-02',
    intro:
      'Memory Café gatherings are gentle social experiences for persons with dementia and their caregivers. Here is how to make the most of your first visit.',
    summary: 'This guide helps families arrive prepared, stay relaxed, and continue after the session.',
    sections: [
      {
        heading: 'What to Expect When You Arrive',
        content:
          'Volunteers welcome you with a warm smile, offer name tags, and introduce a simple sensory activity. The environment is familiar—soft lighting, old Hindi songs, and chairs arranged in circles.'
      },
      {
        heading: 'Bring Comfort Items',
        content:
          'Carry a small object that sparks memories—a photo, a prayer book, a piece of fabric. Facilitators use these items to invite stories and connection.'
      },
      {
        heading: 'Stay for the Gentle Movement Segment',
        content:
          'Facilitators lead seated stretches inspired by physiotherapy and classical dance mudras. This improves circulation and uplifts mood without exhausting participants.'
      },
      {
        heading: 'Use the Caregiver Circle',
        content:
          'While activities run, caregivers step into a short support circle. Questions about medication, sleep routines, and behaviour changes are answered by our dementia coaches.'
      },
      {
        heading: 'Follow Up Within 48 Hours',
        content:
          'Within two days, send a message or call the facilitator. Share observations, ask for adjustments, and book the next session so you stay connected.'
      }
    ]
  },
  {
    filename: 'telehealth_benefits.docx',
    title: 'Why Telehealth Matters for Dementia Care in India',
    author: 'Echoing Healthy Ageing',
    date: '2024-05-14',
    intro:
      'In cities like Mumbai, commuting for dementia consultations is exhausting. Telehealth bridges care gaps with timely, high-quality support.',
    summary: 'Telehealth is no longer optional—it is foundational for dignified dementia care.',
    sections: [
      {
        heading: 'Specialists Wherever You Are',
        content:
          'Video sessions connect families to neurologists, occupational therapists, and dementia counsellors without travel. Even a 30-minute consult prevents avoidable ER visits.'
      },
      {
        heading: 'Continuity Between In-Person Visits',
        content:
          'Follow-up tele-sessions keep treatment plans updated. Care teams monitor nutrition, mobility, and cognitive stimulation weekly instead of waiting months.'
      },
      {
        heading: 'Privacy and Dignity at Home',
        content:
          'Families often hesitate to discuss behaviour changes in crowded clinics. Telehealth lets them speak freely while the person with dementia experiences less anxiety.'
      },
      {
        heading: 'How Echoing Healthy Ageing Uses Telehealth',
        content:
          'We combine video consults with home-based assessments. If we notice early warning signs, we loop in our Memory Café team or therapy partners instantly.'
      }
    ]
  },
  {
    filename: 'caregiver_weekend_checklist.docx',
    title: 'Weekend Checklist for Dementia Caregivers',
    author: 'Echoing Healthy Ageing',
    date: '2024-09-07',
    intro:
      'Weekend hours are perfect for light planning. This checklist keeps dementia care organised without feeling overwhelming.',
    summary: 'Use weekends as a gentle reset for the whole family.',
    sections: [
      {
        heading: 'Review Medication and Supplies',
        content:
          'Count tablets, refill prescriptions, and check mobility aids. Keep a simple log stuck on the fridge so everyone knows what is stocked.'
      },
      {
        heading: 'Plan Social Touchpoints',
        content:
          'Line up phone calls with grandchildren, recorded blessings from loved ones, or a quick video message. Social interactions reduce anxiety for both caregivers and elders.'
      },
      {
        heading: 'Refresh the Calm Corners',
        content:
          'Arrange a chair near the window, keep favourite books accessible, and place a basket with sensory tools like stress balls or essential oils.'
      },
      {
        heading: 'Schedule Your Own Rest',
        content:
          'Reserve an afternoon nap, a walk along Marine Drive, or a coffee with friends. Caregivers who rest for even 45 minutes report higher patience levels.'
      },
      {
        heading: 'Check Upcoming EHA Sessions',
        content:
          'Look at the Memory Café calendar, therapy workshops, and tele-consults. Booking in advance ensures consistent support.'
      }
    ]
  }
];

async function generateDoc(post) {
  const paragraphs = [];

  paragraphs.push(new Paragraph({ text: post.title, heading: HeadingLevel.TITLE }));
  paragraphs.push(new Paragraph({ text: `Author: ${post.author}` }));
  paragraphs.push(new Paragraph({ text: `Date: ${post.date}` }));
  paragraphs.push(new Paragraph({ text: post.summary }));
  paragraphs.push(new Paragraph(''));
  paragraphs.push(new Paragraph({ text: post.intro }));

  post.sections.forEach((section) => {
    paragraphs.push(new Paragraph(''));
    paragraphs.push(new Paragraph({ text: section.heading, heading: HeadingLevel.HEADING_2 }));
    paragraphs.push(new Paragraph({ text: section.content }));
  });

  const doc = new Document({
    sections: [
      {
        properties: {},
        children: paragraphs
      }
    ]
  });

  const buffer = await Packer.toBuffer(doc);
  return buffer;
}

(async () => {
  const outputDir = path.join(process.cwd(), 'public', 'blog');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  for (const post of posts) {
    const buffer = await generateDoc(post);
    fs.writeFileSync(path.join(outputDir, post.filename), buffer);
  }

  console.log('Generated docx files in public/blog');
})();
