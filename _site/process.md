# the development of coradenning.site

## phase 1: domain & dns
*   **purchased domain:** secured `coradenning.site` via namecheap.
*   **configured namecheap advanced dns:** 
    *   added four **A records** pointing to github pages' IP addresses.
    *   added a **CNAME record** for `www` pointing to `coradenning.github.io`.
*   **the "trailing dot" lesson:** learned that some DNS providers require a `.` at the end of CNAME targets.
*   **waited for propagation:** waited a while. i was a little scared...
*   **enforced https:** once github verified the DNS, toggled "enforce https" in repository settings for security.

## phase 2: hello, world
*   **initialized github repo:** created the public repository `coradenning.github.io`.
*   **first commit:** pushed a single `index.html` file to verify the connection.

## phase 3: jekyll
*   **pivoted to static site generation:** decided to use **jekyll** so i don't have to copy-paste navigation bars onto every single page.
*   **created `_config.yml`:** wrote the "brain" of the site to tell github how to handle the domain and markdown.
*   **built `_layouts` folder:** 
    *   created `default.html` as the "skeleton" for the whole site.
    *   created `post.html` as a specific layout for blog reading.
*   **standardized file structure:** 
    *   created `_posts/` for my writing.
    *   created `assets/` to separate my art/images from the code.
* **implemented liquid tags:** used {% raw %}`{{ content }}` and `{% for post in site.posts %}`{% endraw %} to automate the boring parts of web dev.
*   **added front matter:** added the `---` blocks to every page so they "plug into" the layouts.

## phase 4: ugh i hate ruby
*   **attempted `bundle exec jekyll serve`:** tried to preview the site locally on port 4000.
*   **hit "version hell":** discovered macos comes with "system ruby" (2.6.10) which is ancient and incompatible with modern gems.
*   **the "ffi" error:** learned that modern ruby gems require ruby 3.0+ to talk to the mac's hardware.
*   **installed homebrew:** set up the mac package manager to get real dev tools.
*   **installed `rbenv`:** set up a ruby version manager to bypass apple’s restricted files.
*   **the "compilation" marathon:** ran `rbenv install 3.3.0` and watched the computer use 8 cores (`make -j 8`) to build a new language from scratch. this part of development is so confusing, i'm getting flashbacks to my full-stack web dev class.
*   **re-aligned the PATH:** edited `.zshrc` with `echo` and `eval` commands to force the terminal to look at the new ruby instead of the old one.
*   **verified the shim:** used `which ruby` to confirm the terminal is finally using the `rbenv` version.

## phase 5: professional workflows & victory
* **initialized gemfile:** ran `bundle init` to create a manifest of all the software my site needs to run.
* **configured the gemfile:** added `jekyll` and `webrick` as core dependencies. 
* **executed `bundle install`:** generated a `Gemfile.lock`, which acts as a "receipt" for the exact versions of software used.
* **overcame the "vscode terminal" ghost:** discovered that open terminal sessions don't automatically see system-level changes. 
    * **the fix:** used `source ~/.zshrc` to manually refresh the environment.
* **launched local development server:** ran `bundle exec jekyll serve` and successfully viewed the site at `http://127.0.0.1:4000/`.
* **verified the compiler:** confirmed that jekyll is correctly stripping front matter and injecting content into `_layouts/default.html`.
* **documentation:** created this `process.md` file to track the "why" and the "how" of my development journey.