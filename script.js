function showTab(tab) {
  document.querySelectorAll('.tab').forEach(t => t.classList.add('hidden'));
  document.getElementById(tab).classList.remove('hidden');
  document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('bg-purple-700', 'text-white'));
  event.target.classList.add('bg-purple-700', 'text-white');
}

document.getElementById('instagramForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const bio = this.bio.value.trim();
  const hashtags = this.hashtags.value.trim();
  const results = [];

  if (bio.length > 150) {
    results.push('🔴 Bio too long – try under 150 characters.');
  } else {
    results.push('✅ Bio length is good.');
  }

  if (hashtags.split('#').length - 1 > 5) {
    results.push('⚠️ Too many hashtags – Instagram prefers 3–5.');
  } else {
    results.push('✅ Good use of hashtags.');
  }

  document.getElementById('instagramResults').innerHTML = '<ul class="list-disc ml-5">' + results.map(r => '<li>' + r + '</li>').join('') + '</ul>';
});

document.getElementById('websiteForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const meta = this.meta.value.trim();
  const keywords = this.keywords.value.trim();
  const results = [];

  if (meta.length < 50 || meta.length > 160) {
    results.push('🔴 Meta description should be 50–160 characters.');
  } else {
    results.push('✅ Meta description length is perfect.');
  }

  if (!keywords) {
    results.push('⚠️ Add target keywords to optimize search visibility.');
  } else {
    results.push('✅ Keywords included.');
  }

  document.getElementById('websiteResults').innerHTML = '<ul class="list-disc ml-5">' + results.map(r => '<li>' + r + '</li>').join('') + '</ul>';
});

function exportPDF() {
  alert('📄 PDF export will be available in the Pro version.');
}