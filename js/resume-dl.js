
class downloadResume {
    constructor(url, filename) {
      this.url = url;
      this.filename = filename;
    }
  
    download() {
      console.log("function initiated")
      const link = document.createElement('a');
      link.href = this.url;
      link.setAttribute('download', this.filename);
      link.click();
      link.remove();
    }
  }
  
  const fileURL = 'https://1drv.ms/b/s!AjWrEfYIJFEIkGNEgedxEGxk7OIZ?e=1WPHgG';
  const suggestedFilename = 'resume.pdf';
  const downloader = new downloadResume(fileURL, suggestedFilename);
  
  // Find the button element by its ID
  const downloadButton = document.getElementById("dl-resume-btn");
  
  // Add a click event listener to the button
  downloadButton.addEventListener('click', () => {
    // Call the download method when the button is clicked
    downloader.download();
  }); 