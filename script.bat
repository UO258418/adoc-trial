@echo off
for %%d in (src/docs/*.adoc) do @(echo Converting %%d & @asciidoctor src/docs/%%d -D docs) 