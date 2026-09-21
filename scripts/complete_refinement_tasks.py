from pathlib import Path

path = Path('/home/ubuntu/staging-e4power/todo.md')
source = path.read_text()
items = [
    'Add a branded B.R.I.D.G.E. concept introduction ahead of the homepage model library using the supplied collaboration imagery.',
    'Add an accessible left-edge scroll progress indicator that reflects page position without obscuring content.',
    'Add Home, Contact Us, and Core Services navigation destinations and make every hero service-selector item link to its matching on-page service content.',
    'Prevent the Services header navigation from reflowing into a dropdown after theme changes, then validate desktop and phone behavior.',
]
for item in items:
    pending = f'- [ ] {item}'
    complete = f'- [x] {item}'
    if source.count(pending) != 1:
        raise RuntimeError(f'Expected exactly one pending item: {item}')
    source = source.replace(pending, complete, 1)
path.write_text(source)
print(f'Completed {len(items)} scoped tracker items')
