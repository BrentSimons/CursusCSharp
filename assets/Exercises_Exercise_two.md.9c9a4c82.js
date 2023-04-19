import{_ as s,c as n,o as a,N as e}from"./chunks/framework.c3acf437.js";const l="/CursusCSharp/assets/personenRegister.00709755.png",B=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"Exercises/Exercise_two.md"}'),o={name:"Exercises/Exercise_two.md"},p=e('<h2 id="exercise-2-personen-register" tabindex="-1">Exercise 2: Personen register <a class="header-anchor" href="#exercise-2-personen-register" aria-label="Permalink to &quot;Exercise 2: Personen register&quot;">​</a></h2><p>In deze oefening maken we een personen register voor de stad Pelt. De applicatie moet personen kunnen opslaan en verwijderen in een listbox.</p><p>Voor elke persoon slaan we de naam, leeftijd en adres op. Ook moet er een functie zijn om de tekst over de persoon te laten zien in de listbox.</p><p><img src="'+l+`" alt="personenRegister"></p><h3 id="werken-met-een-listbox" tabindex="-1">Werken met een listbox <a class="header-anchor" href="#werken-met-een-listbox" aria-label="Permalink to &quot;Werken met een listbox&quot;">​</a></h3><p>Om te werken met een listbox in WF kan je best een private lijst aanmaken in je Form class</p><div class="language-csharp"><button title="Copy Code" class="copy"></button><span class="lang">csharp</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">objectList</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">List</span><span style="color:#89DDFF;">&lt;</span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">&gt;();</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    En een functie aanmaken die de listbox gelijksteld aan de list</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`csharp</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">RefreshListBox</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        listBox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Items</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Clear</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;font-style:italic;">foreach</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">in</span><span style="color:#A6ACCD;"> objectList</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">            listBox</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">Items</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">object</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">ToString</span><span style="color:#89DDFF;">());</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    Daarna kan je objects toevoegen of verwijderen van de listbox door ze eerst toetevoegen</span><span style="color:#89DDFF;">/</span><span style="color:#A6ACCD;">te verwijderen van </span><span style="color:#FFCB6B;">de</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">lijst</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">en</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">dan</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">de</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">functie</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">uittevoeren</span><span style="color:#A6ACCD;">:</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span><span style="color:#FFCB6B;">csharp</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#FFCB6B;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">btnVoegPersoonToe_Click</span><span style="color:#A6ACCD;">(</span><span style="color:#FFCB6B;">object</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">sender</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">EventArgs</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">e</span><span style="color:#A6ACCD;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#89DDFF;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> txtObject</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">text</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">object</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Object</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;">name</span><span style="color:#89DDFF;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">        objectList</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">Add</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;"> persoon </span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#82AAFF;">RefreshListBox</span><span style="color:#89DDFF;">();</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">    \`\`\`</span></span></code></pre></div>`,7),t=[p];function r(c,C,F,D,A,y){return a(),n("div",null,t)}const d=s(o,[["render",r]]);export{B as __pageData,d as default};
