export default function handler(req, res) {
    if (req.method === 'POST') {
      const { name, title, description } = req.body;
      // Lakukan sesuatu dengan data yang diterima
      console.log('Nama:', name);
      console.log('Title:', title);
      console.log('Description:', description);

  
      res.status(200).json({ message: 'Data berhasil diterima!' });
    } else {
      res.status(405).json({ message: 'Method yang diperbolehkan hanya POST!' });
    }
  }