import fs from "fs";
import path from "path";
import matter from "gray-matter";
// Remove remark imports and use our custom utility
import { markdownToHtml } from "./markdown-utils";

const projectsDirectory = path.join(process.cwd(), "src/app/_data/companies");

// Custom renderer function to avoid the problematic dependency
const simpleHtmlRenderer = () => {
  return (tree) => {
    let html = '';
    
    // Simple recursive function to convert nodes to HTML
    const processNode = (node) => {
      if (node.type === 'text') {
        return node.value;
      }
      
      if (node.type === 'paragraph') {
        return `<p>${node.children.map(processNode).join('')}</p>`;
      }
      
      if (node.type === 'heading') {
        const level = node.depth;
        return `<h${level}>${node.children.map(processNode).join('')}</h${level}>`;
      }
      
      if (node.type === 'emphasis') {
        return `<em>${node.children.map(processNode).join('')}</em>`;
      }
      
      if (node.type === 'strong') {
        return `<strong>${node.children.map(processNode).join('')}</strong>`;
      }
      
      if (node.type === 'list') {
        const tag = node.ordered ? 'ol' : 'ul';
        return `<${tag}>${node.children.map(processNode).join('')}</${tag}>`;
      }
      
      if (node.type === 'listItem') {
        return `<li>${node.children.map(processNode).join('')}</li>`;
      }
      
      if (node.type === 'link') {
        const url = node.url.replace(/^(javascript|data|vbscript|file):/i, 'unsafe:');
        return `<a href="${url}">${node.children.map(processNode).join('')}</a>`;
      }
      
      // For other node types, just process children
      if (node.children) {
        return node.children.map(processNode).join('');
      }
      
      return '';
    };
    
    // Process each top-level node
    if (tree.children) {
      html = tree.children.map(processNode).join('');
    }
    
    return html;
  };
};

export function getSortedProjectsData() {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allData = fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Combine the data with the id
    return {
      id,
      ...matterResult.data,
    };
  });
  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.id > b.id) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getRelatedProjects(current_id) {
  // Get file names under /posts
  const fileNames = fs.readdirSync(projectsDirectory);
  const allData = [];

  fileNames.map((fileName) => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, "");

    // Read markdown file as string
    const fullPath = path.join(projectsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Exclude current id from result

    if (id != current_id) {
      // Combine the data with the id
      allData.push({
        id,
        ...matterResult.data,
      });
    }
  });

  // Sort posts by date
  return allData.sort((a, b) => {
    if (a.category > b.category) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getAllProjectsIds() {
  const fileNames = fs.readdirSync(projectsDirectory);

  return fileNames.map((fileName) => {
    return {
      params: {
        id: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

export async function getProjectData(id) {
  const fullPath = path.join(projectsDirectory, `${id}.md`);

  if (fs.existsSync(fullPath)) {
    const fileContents = fs.readFileSync(fullPath, "utf8");

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents);

    // Use our custom markdown to HTML converter instead of remark
    const contentHtml = markdownToHtml(matterResult.content);

    // Combine the data with the id and contentHtml
    return {
      id,
      contentHtml,
      ...matterResult.data,
    };
  } else {
    return;
  }
}
