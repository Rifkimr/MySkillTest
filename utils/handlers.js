
import React from "react";
import { useState, useEffect, useRef } from 'react'
import { useRouter } from 'next/navigation';

const UseHandler = () => {
    const router = useRouter();
    const [imagePreview, setImagePreview] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const fileInputRef = useRef(null);
    const [editIndex, setEditIndex] = useState(null);
    const [profile, setProfile ] = useState({
      name: '',
      title: '',
      description: '',
      imagecover: '',
      portfolio: [],
    }); 
  
     const [previewPortfolio, setPreviewPortfolio] = useState({
      posisi: '',
      perusahaan: '',
      postAt: '',
      endDate: '',
      description: '',
    });

    const fetchData = async () => {
        try {
          const response = await fetch('https://658698eb468ef171392e71a5.mockapi.io/api/myskill/profile/1');
          if (response.ok) {
            const updatedViews = await response.json();
            setProfile(updatedViews);
          } else {
            console.error('Gagal memperbarui data.');
          }
        } catch (error) {
          console.error('Terjadi kesalahan:', error);
        }
      };
    

    const handleCardClick = (index) => {
        setEditIndex(index);
        const selectedPortfolio = profile.portfolio[index];
        setPreviewPortfolio(selectedPortfolio);
      };

      useEffect(() => {
        fetchData();
      }, []);
    
      const handleSubmit = async (e) => {
        if (e) {
          e.preventDefault();
          setIsLoading(true);
        }
      
        try {
          const response = await fetch('https://658698eb468ef171392e71a5.mockapi.io/api/myskill/profile/1', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(profile),
          });
      
          if (response.ok) {
            const data = await response.json();
            console.log('Data berhasil dikirim:', data);
            router.push('/project');
            if (profile.imagecover) {
              const imageCoverResponse = await fetch('https://658698eb468ef171392e71a5.mockapi.io/api/myskill/imagecover/1', {
                method: 'PUT',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify({ imagecover: profile.imagecover }),
              });
      
              if (imageCoverResponse.ok) {
                const imageCoverData = await imageCoverResponse.json();
                console.log('Image cover berhasil diperbarui:', imageCoverData);
              } else {
                console.error('Gagal mengupdate image cover:', imageCoverResponse.statusText);
              }
            }
          } else {
            console.error('Gagal mengirim data:', response.statusText);
          }
        } catch (error) {
          console.error('Terjadi kesalahan:', error);
        } finally {
            setIsLoading(false)
        }
      };
      
      const handleChange = (e) => {
        const { id, value } = e.target;
        setProfile((prevProfile) => ({
          ...prevProfile,
          [id]: value,
        }));
      };
    
      const handlePortfolioChange = (e) => {
        const { id, value } = e.target;
        setPreviewPortfolio((prevPortfolio) => ({
          ...prevPortfolio,
          [id]: value,
        }));
      };
      const addPortfolio = () => {
      const newPortfolio = {
        ...previewPortfolio,
        id: profile.portfolio.length + 1, // Menambahkan ID baru berdasarkan panjang array portfolio
      };
    
      if (editIndex !== null) {
        setProfile((prevProfile) => ({
          ...prevProfile,
          portfolio: prevProfile.portfolio.map((item, index) =>
            index === editIndex ? newPortfolio : item
          ),
        }));
      } else {
        setProfile((prevProfile) => ({
          ...prevProfile,
          portfolio: Array.isArray(prevProfile.portfolio)
            ? [...prevProfile.portfolio, newPortfolio]
            : [newPortfolio],
        }));
      }
    
      setEditIndex(null);
      setPreviewPortfolio({
        posisi: '',
        perusahaan: '',
        postAt: '',
        endDate: '',
        description: '',
      });
    };
    
      const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result); 
            setProfile(prevProfile => ({
              ...prevProfile,
              imagecover: reader.result, 
            }));
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleDragOver = (e) => {
        e.preventDefault();
      };
    
      const handleDrop = (e) => {
        e.preventDefault();
        const file = e.dataTransfer.files[0];
        if (file) {
          const reader = new FileReader();
          reader.onloadend = () => {
            setImagePreview(reader.result);
          };
          reader.readAsDataURL(file);
        }
      };
    
      const handleFileInputClick = () => {
        fileInputRef.current.click();
      };
    
      const handleDeleteCard = (index) => {
        const updatedPortfolio = profile.portfolio.filter(
          (item, idx) => idx !== index
        );
        setProfile((prevProfile) => ({
          ...prevProfile,
          portfolio: updatedPortfolio,
        }));
      };

      useEffect(() => {
        fetchData()
      },[]);

  return {
    handleCardClick,
    handleSubmit,
    handleChange,
    handlePortfolioChange,
    addPortfolio,
    handleFileChange,
    handleDragOver,
    handleDrop,
    handleFileInputClick,
    handleDeleteCard,
    previewPortfolio,
    imagePreview,
    fileInputRef,
    editIndex,
    profile,
    isLoading,
    fetchData
  };
};

export default UseHandler;



