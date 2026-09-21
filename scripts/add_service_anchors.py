from pathlib import Path

path = Path('/home/ubuntu/staging-e4power/client/services/index.html')
source = path.read_text()
replacements = {
    '<section class="services-flyer-core" aria-labelledby="core-services-heading">': '<section class="services-flyer-core" id="core-services" aria-labelledby="core-services-heading">',
    '<li><span class="services-flyer-index">01</span>': '<li id="grant-writing"><span class="services-flyer-index">01</span>',
    '<li><span class="services-flyer-index">02</span>': '<li id="grant-management"><span class="services-flyer-index">02</span>',
    '<li><span class="services-flyer-index">03</span>': '<li id="project-management"><span class="services-flyer-index">03</span>',
    '<li><span class="services-flyer-index">04</span>': '<li id="readiness-assessments"><span class="services-flyer-index">04</span>',
    '<li><span class="services-flyer-index">06</span>': '<li id="financial-management"><span class="services-flyer-index">06</span>',
    '<li><span class="services-flyer-index">07</span>': '<li id="speaking-engagements"><span class="services-flyer-index">07</span>',
    '<li><span class="services-flyer-index">08</span>': '<li id="it-solutions"><span class="services-flyer-index">08</span>',
}

for old, new in replacements.items():
    count = source.count(old)
    if count != 1:
        raise RuntimeError(f'Expected one match for {old!r}, found {count}')
    source = source.replace(old, new, 1)

path.write_text(source)
print(f'Updated {len(replacements)} direct Service anchors in {path}')
