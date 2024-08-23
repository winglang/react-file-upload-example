import logo from './logo.svg';
import './App.css';
import { fetchConfig } from './fetchConfig';
import { useEffect, useState } from 'react';

function App() {
  const [presignedUrl, setPresignedUrl] = useState('');

  useEffect(() => {
    const fetchPresignedUrl = async () => {
      try {
        const uploadUrl = (await fetchConfig()).uploadUrl;
        const response = await fetch(uploadUrl);
        const data = await response.json();
        setPresignedUrl(data.url);
      } catch (error) {
        console.error('Error fetching presigned URL:', error);
      }
    };

    fetchPresignedUrl();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <form
          onSubmit={async (e) => {
            e.preventDefault();

            const file = e.target.file.files?.[0];

            // console.error(presignedUrl);

            const image = await fetch(presignedUrl, {
              body: file,
              method: "PUT",
              headers: {
                "Content-Type": file.type,
                "Content-Disposition": `attachment; filename="${file.name}"`,
              },
            });

            // console.error(image.status);
            // console.error(image.statusText);
            // console.error(image.url);

            // Redirect the user to the uploaded image
            window.location.href = image.url.split("?")[0];
          }}
        >
          <input name="file" type="file" accept="image/png, image/jpeg" />
          <button type="submit">Upload</button>
        </form>
      </header>
    </div>
  );
}

export default App;
