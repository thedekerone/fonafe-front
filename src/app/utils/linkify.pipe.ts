import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'linkify',
  standalone: true  // Mark the pipe as standalone
})
export class LinkifyPipe implements PipeTransform {
  constructor(private sanitizer: DomSanitizer) {}

  transform(text: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(this.linkify(text));
  }

  private linkify(text: string): string {
    const urlRegex = /(((https?:\/\/)|(www\.))[^\s]+)/g;
    return text.replace(urlRegex, (url) => {
      const hyperlink = url.startsWith('http') ? url : `http://${url}`;
      return `<a class="text-blue-600 hover:text-blue-800 visited:text-purple-600"  href="${hyperlink}" target="_blank">${url}</a>`;
    });
  }
}
