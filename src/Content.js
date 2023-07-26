import React from "react";

const Content = () => {

  //001 SAMPLE
    const handleNameChange = () => {
        const names = ['Kaya Mo Yan!', 'Gusto Ko To!', 'Fullstack'];
        const int = Math.floor(Math.random() * 3)
        return names[int];
  }


    return (
        <main>
            <p>
                Hello {handleNameChange()};
            </p>
        </main>
    )
}

export default Content
