@echo off
for %%d in (src/docs/*.adoc) do @asciidoctor src/docs/%%d -D docs