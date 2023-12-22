import React, { useEffect, useState } from 'react'

const useScrollProgress = () => {
    const [completion, setCompletion] = useState(0)

    useEffect(() => {
        const updateScrollCompletion = () => {
            const currenProgress = window.scrollY;
            const scrollHeight = document.body.scrollHeight - window.innerHeight;

            if (scrollHeight) {
                setCompletion(Number(currenProgress / scrollHeight).
                toFixed(2) * 100);
            }
            
        }
        window.addEventListener('scroll', updateScrollCompletion);

        return () => window.removeEventListener('scroll', updateScrollCompletion);
    },[])


  return completion;
    
}

export default useScrollProgress