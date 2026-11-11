# PLA Operational Concepts: a glossary

A small static site that defines key operational concepts in the Chinese People's Liberation Army, with the Chinese term and pinyin, the sources each entry rests on, and original diagrams for the larger ideas. It follows the Takshashila design language and has no build step and no dependencies.

## Pages

| Page | What it holds |
|---|---|
| `index.html` | Featured diagrams and the A to Z list, with search and theme filters |
| `concept.html#<id>` | One entry: definition, Chinese term, diagram, related concepts |
| `map.html` | An interactive map of how the 38 concepts connect |
| `gallery.html` | All 17 diagrams, with enlargement |
| `wtc.html` | 22 examples of the concepts at work in the Western Theatre |
| `sources.html` | The six sources used |

## Publishing on GitHub Pages

1. Create a public repository and upload everything in this folder. Make sure the `assets` folder goes up as a folder, since it holds the stylesheet, scripts and content.
2. In the repository, open Settings, then Pages. Under Build and deployment choose Deploy from a branch, select `main` and `/ (root)`, and save.
3. The site appears within a minute or two at `https://<account>.github.io/<repository>/`.

To preview locally, run `python3 -m http.server 8000` in this folder and open `http://localhost:8000`.

## Files

| Path | What it holds |
|---|---|
| `assets/concepts.js` | All entries and the source list |
| `assets/diagrams.js` | The diagrams, drawn as inline SVG |
| `assets/app.js` | Navigation, search, concept pages, map and gallery |
| `assets/style.css` | Design tokens and components |

An entry is one object in `assets/concepts.js` with an `id`, a `term`, a short definition, paragraphs of definition, related entries, sources and, optionally, the name of a diagram.
