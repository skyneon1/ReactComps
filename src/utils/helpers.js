export const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(
      () => alert("Code copied!"),
      (err) => console.error("Failed to copy: ", err)
    );
  };
  