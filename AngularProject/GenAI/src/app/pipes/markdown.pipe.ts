import { Pipe, PipeTransform } from "@angular/core";
import { marked } from "marked";

@Pipe({
  name: "markdown",
  standalone: true
})
export class MarkdownPipe implements PipeTransform {
  transform(rawMarkdown: string | null | undefined): string {
    if (!rawMarkdown) {
      return ""; // ✅ `null` / `undefined`
    }
    return marked.parse(rawMarkdown) as string;
  }
}