import React from 'react'

const Tutorial = (props) => {    
  return (
    <>
      <div className={`tutorialPage`} style={{color : `${props.color}`}}>        
          <h1>What is WordCounter?</h1>
          Apart from counting words and characters, our online editor can help you to improve word choice and writing style, and, optionally, help you to detect grammar mistakes and plagiarism. To check word count, simply place your cursor into the text box above and start typing. You'll see the number of characters and words increase or decrease as you type, delete, and edit them. You can also copy and paste text from another program over into the online editor above. The Auto-Save feature will make sure you won't lose any changes while editing, even if you leave the site and come back later. Tip: Bookmark this page now.

          Knowing the word count of a text can be important. For example, if an author has to write a minimum or maximum amount of words for an article, essay, report, story, book, paper, you name it. WordCounter will help to make sure its word count reaches a specific requirement or stays within a certain limit.

          In addition, WordCounter shows you the top 10 keywords and keyword density of the article you're writing. This allows you to know which keywords you use how often and at what percentages. This can prevent you from over-using certain words or word combinations and check for best distribution of keywords in your writing.

          In the Details overview you can see the average speaking and reading time for your text, while Reading Level is an indicator of the education level a person would need in order to understand the words you’re using.

          Disclaimer: We strive to make our tools as accurate as possible but we cannot guarantee it will always be so.
      </div>
      <br />
      <br />
      <br />
      <div className={`tutorialPage`} style={{color : `${props.color}`}} >
          <strong>You are on the tutorial Page</strong>
          <strong>Sample Text - </strong>
          <br />
          <br />
          <br />
          Sample Input -
          <strong>This is a Word Counter Text Utility Tutorial</strong>
          <br />
          Converting it to the full Uppercase -
          <br />
          Sample output - 
          <strong>THIS IS A Word  TEXT UTILITY TUTORIAL</strong>
          <br />
          <br />
          <br />
          Sample Input -
          <strong>This Is A Tutorial For Converting The Sentence To LowerCase</strong>
          <br />
          Converting it to the full Lowercase -
          <br />
          Sample output - 
          <strong>this is a tutorial for converting the sentence to lowercase</strong>
          <br />
          <br />
          <br />
      </div>
      
    </>
  )
}
export default Tutorial
