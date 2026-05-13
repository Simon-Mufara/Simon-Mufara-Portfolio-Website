// scripts.js — FINAL FIXED VERSION (keeps your original style + fixes gallery forever + project details)
// Theme is handled by `js/ux.js` (theme toggle and data-theme storage).

// Projects data (brief as in CV screenshots, updated with PDF details)
const projects = [
  {id:'transformer', title:'Transformer-Based Multi-Omics Drug Response Prediction Model', tags:['ml'], thumb:'https://journals.plos.org/ploscompbiol/article/figure/image?size=medium&id=10.1371/journal.pcbi.1012905.g008', desc:'Developing a transformer-based multi-omics drug response prediction model for African breast cancer patients.', longDesc:'Relevant Coursework: Developing a transformer-based multi-omics drug response prediction model for African breast cancer patients<br>• Applied transfer learning to fine-tune models on African-specific TNBC and HER2+ cohorts, achieving improved accuracy vs. baseline models<br>• Integrated 5+ datasets (BCaPE, H3Africa, GEO, TCGA, GDSC) covering 1,000+ samples across gene expression, mutations, and methylation (Jan 2025 - Dec 2025, University of Cape Town)'},
  {id:'variant', title:'MTB Variant Calling Pipeline', tags:['genomics'], thumb:'https://www.biocode.org.uk/wp-content/uploads/2023/02/Course-Thumbnail-for-Cancer-Genomics-NGS-Whole-Exam-Sequencing-Variant-Calling-Using-Linux-scaled-e1677150883454.webp', desc:'Performed end-to-end variant calling on 5+ Mycobacterium tuberculosis clinical isolates using bcftools, samtools, and Snakemake.', longDesc:'• Performed end-to-end variant calling on 5+ Mycobacterium tuberculosis clinical isolates using bcftools, samtools, and Snakemake<br>• Annotated variants with SnpEff, predicting functional consequences and highlighting drug resistance-associated mutations<br>• Utilized data visualization tools and generative AI to present bioinformatics findings and support healthcare decision-making<br>• Published full pipeline and documentation is available on GitHub with cleaned QC which achieved a score of 98% (Mar 2025 - Jun 2025, Drug Discovery & Drug Development (H3D), Cape Town)'},
  {id:'equity', title:'Global Health Equity Intern', tags:['dashboards'], thumb:'https://supermetrics.com/cdn-cgi/image/onerror=redirect,width=1510,height=942,format=png/https://cdn.sanity.io/images/8ly2m84z/production-2025/60bb12ef3bc0dc52f10c537d35818423638a8e9a-1510x942.png?w=1510&h=942&fit=max', desc:'Presented strategic vision and progress reports directly to the CEO and senior leadership, securing executive sponsorship and resources for sustainability.', longDesc:'• Presented strategic vision and progress reports directly to the CEO and senior leadership, securing executive sponsorship and resources for sustainability<br>• Supported 3 healthcare access programs across Sub-Saharan Africa, contributing to policy recommendations impacting ~10,000 patients<br>• Developed 5+ dashboards and reports to communicate findings to internal stakeholders and external partners, which leveraged business operations<br>• Collaborated with cross-functional teams of 10+ staff to integrate data insights into strategic planning, which improved healthcare management (Jan 2024 - Dec 2024, Johnson & Johnson Innovative Medicine, Midrand)'},
  {id:'pediatric', title:'Early Childhood Development - Oncology & Nephrology Intern', tags:['business'], thumb:'https://ccr.cancer.gov/sites/default/files/styles/half_4_3/public/2021-07/Peds%20patient.jpg?itok=pJUTOv3e', desc:'Supervised pedestrian wards at Chris Hani Baragwanath Hospital and Charlotte Maxeke Johannesburg Academic Hospital working with over 30+ health practitioners.', longDesc:'• Supervised pedesterian wards at Chris Hani Baragwanath Hospital and Charlotte Maxeke Johannesburg Academic Hospital working with over 30+ health practitioners<br>• Managed 200+ Electronic Medical Records using Redcap, improving data accessibility<br>• Delivered 10+ structured health education sessions per month to children and families (Jan 2023 - Dec 2023, Reach For A Dream, Johannesburg)'},
  {id:'facilitator', title:'Voluntary Facilitator', tags:['business'], thumb:'https://www.cpc-nyc.org/sites/default/files/events/Facebook%20En%20%281%29_0.png', desc:'Facilitated 5+ interactive science workshops for township students on HIV/TB awareness.', longDesc:'• Facilitated 5+ interactive science workshops for township students on HIV/TB awareness<br>• Designed and delivered monthly youth engagement sessions, reaching 50+ students per session (Feb 2025 - Present, EH!Woza)'}
];

// Render projects (fixed: use 'project-list' on projects.html, show longDesc there)
function renderProjects(list){
  const grid = document.getElementById('project-grid') || document.getElementById('project-list');
  if(!grid) return;
  grid.innerHTML = '';
  const isFull = grid.id === 'project-list';  // Show longDesc on projects.html
  list.forEach(p => {
    const el = document.createElement('div');
    el.className = 'project-card card reveal';
    el.id = p.id;
    const desc = isFull ? p.longDesc.replace(/\n/g, '<br>') : p.desc;
    el.innerHTML = `<img src='${p.thumb}' alt='${p.title}' style='width:100%;height:140px;object-fit:cover;border-radius:8px;margin-bottom:8px' onerror="this.style.opacity=0.6">
                    <h4>${p.title}</h4>
                    <div class='muted' style='margin-top:6px'>${desc}</div>`;
    grid.appendChild(el);
  });
  initReveal();
}
renderProjects(projects);

// Add this for certificates gallery (user can add images to certImages array)
const certImages = []; // Add your paths here later, e.g., 'assets/certificates/cert1.jpg'
function renderCertGallery(){
  const grid = document.getElementById('cert-gallery-grid');
  if(!grid) return;
  grid.innerHTML = '';
  certImages.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src;
    img.alt = `Certificate ${i+1}`;
    img.className = 'reveal';
    grid.appendChild(img);
  });
  initReveal();
}
renderCertGallery();

// Filters
document.querySelectorAll('.filter').forEach(f=>f.addEventListener('click', ()=>{
  document.querySelectorAll('.filter').forEach(x=>x.classList.remove('active'));
  f.classList.add('active');
  const tag = f.dataset.tag;
  const filtered = tag==='all' ? projects : projects.filter(p=>p.tags.includes(tag));
  renderProjects(filtered);
  initReveal();
}));

// Scroll reveal
function initReveal(){
  const els = document.querySelectorAll('.reveal');
  els.forEach((el,i)=>{ setTimeout(()=>{ el.classList.add('revealed'); }, i*80); });
}
initReveal();

// === GALLERY — FIXED TO ALWAYS WORK WITH YOUR ORIGINAL WHATSAPP NAMES ===
const actionImagesOriginal = [
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.48 (1).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.48 (2).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.48 (3).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.48.jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.49 (1).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.49 (2).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.49 (3).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.49 (4).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.49.jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.50 (1).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.50 (2).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.50 (3).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.50 (4).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.50.jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.51 (1).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.51 (2).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.51 (3).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.51 (4).jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.51.jpeg',
  'assets/images/WhatsApp Image 2025-11-25 at 22.54.52.jpeg'
];

function renderGallery(){
  const grid = document.getElementById('gallery-grid');
  if(!grid) return;
  grid.innerHTML = '';
  actionImagesOriginal.forEach((src, i) => {
    const img = document.createElement('img');
    img.src = src + '?v=' + Date.now();  // prevents caching issues
    img.alt = `Simon in action ${i+1}`;
    img.className = 'reveal';
    img.style.cursor = 'pointer';
    img.onclick = () => openLightbox(i);
    img.onerror = () => { img.style.opacity = '0.5'; img.title = 'Image not found'; };
    grid.appendChild(img);
  });
  initReveal();
}
renderGallery();

// === LIGHTBOX (now uses original filenames directly) ===
let lbIndex = 0;
function openLightbox(i){
  lbIndex = i;
  const lbImg = document.getElementById('lb-img');
  lbImg.src = actionImagesOriginal[i] + '?v=' + Date.now();
  document.getElementById('lightbox').classList.add('show');
}
function closeLightbox(){
  document.getElementById('lightbox').classList.remove('show');
  document.getElementById('lb-img').src = '';
}
function nextLightbox(){ lbIndex = (lbIndex + 1) % actionImagesOriginal.length; openLightbox(lbIndex); }
function prevLightbox(){ lbIndex = (lbIndex - 1 + actionImagesOriginal.length) % actionImagesOriginal.length; openLightbox(lbIndex); }

document.getElementById('lb-close')?.addEventListener('click', closeLightbox);
document.getElementById('lb-next')?.addEventListener('click', nextLightbox);
document.getElementById('lb-prev')?.addEventListener('click', prevLightbox);
window.addEventListener('keydown', e => {
  if(document.querySelector('.lightbox.show')){
    if(e.key === 'Escape') closeLightbox();
    if(e.key === 'ArrowRight') nextLightbox();
    if(e.key === 'ArrowLeft') prevLightbox();
  }
});

// Entrance animation on load
window.addEventListener('load', () => {
  document.querySelectorAll('.reveal').forEach((el,i) => {
    setTimeout(() => el.classList.add('revealed'), i*60);
  });
});