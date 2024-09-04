// import { BlocksRenderer } from '@strapi/blocks-react-renderer';
// import "../../../public/styles.css"
// import goudyFont from "../../../public/fonts/goudy_bookletter_1911.woff";
// const MarkdownContent = ({ content }) => {
//   return (
//     <BlocksRenderer
//       content={content}
//       blocks={{
//         paragraph: ({ children }) => (
//           <p style={{ fontFamily: '"goudy_bookletter_1911"', color: '#fffbef', fontSize: '1.5rem', margin: 0, padding: 0 }}>
//             {children}
//           </p>
//         ),
//         heading: ({ children, level }) => {
//           switch (level) {
//             case 1:
//               return  <h1 style={{ fontFamily:' "Poppins", sans-serif', color: '#fffbef', fontWeight: 900,  padding: 0, fontSize: '3rem'}}>{children}</h1>
//             case 2:
//               return  <h2 style={{ fontFamily:' "Poppins", sans-serif', color: '#fffbef', fontWeight: 900,  padding: 0, fontSize: '2rem'}}>{children}</h2>
//             case 3:
//               return  <h3 style={{ fontFamily:' "Poppins", sans-serif', color: '#fffbef', fontWeight: 900, padding: 0, fontSize: '1.5rem'}}>{children}</h3>
//             case 4:
//               return  <h4 style={{ fontFamily:' "Poppins", sans-serif', color: '#fffbef', fontWeight: 900, margin: 0, padding: 0, fontSize: '1.5rem'}}>{children}</h4>
//             case 5:
//               return  <h5 style={{ fontFamily:' "Poppins", sans-serif', color: '#fffbef', fontWeight: 900, margin: 0, padding: 0, fontSize: '1.5rem'}}>{children}</h5>
//             case 6:
//               return  <h6 style={{ fontFamily:' "Poppins", sans-serif', color: '#fffbef', fontWeight: 900, margin: 0, padding: 0, fontSize: '1.5rem'}}>{children}</h6>
//             default:
//               return  <h1 style={{ fontFamily:' "Poppins", sans-serif', color: '#fffbef', fontWeight: 900, margin: 0, padding: 0, fontSize: '1.5rem'}}>{children}</h1>
//           }
//         },
//         link: ({ children, url }) => <a style={{color: '#fffbef', fontSize: '1.5rem'}} target="_blank" href={url}>{children}</a>,
//         image: ({ image }) => {
//           return (
//             <img
//               src={image.url}
//              style={{width:"100%", height:"100%", borderRadius: '10px'}}
//               alt={image.alternativeText || ""}
//             />
//           );
//         },
//         list: ({children, format}) => {
//           if(format == "ordered"){
//             return (
//               <ol style={{color: '#fffbef', fontSize: '1.5rem'}}>{children}</ol>
//   )
//           }
//           else {
//             return( 
//             <ul style={{color: '#fffbef', fontSize: '1.5rem'}}>{children}</ul>
//             )
//           }
//         }
//       }}
//       modifiers={{
//         bold: ({ children }) => <strong style={{color: '#fffbef', fontSize: '1.5rem'}}>{children}</strong>,
//         italic: ({ children }) => <span style={{color: '#fffbef', fontSize: '1.5rem'}}>{children}</span>,

//       }}
//     />
//   );
// };


// export default MarkdownContent;

import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import goudyFont from "../../../public/font.woff";
import poppinsFont from "../../../public/Poppins/Poppins-Black.ttf";

const MarkdownContent = ({ content }) => {
  const styles = {
    '@font-face': [
      {
        fontFamily: 'goudy_bookletter_1911',
        src: `url(${goudyFont}) format('truetype')`,
      },
      {
        fontFamily: 'Poppins',
        src: `url(${poppinsFont}) format('truetype')`,
      },
    ],
    paragraph: {
    
      color: '#fffbef',
      fontSize: '1.5rem',
      margin: 0,
      padding: 0,
    },
    heading: (level) => {
      const baseStyle = {

        color: '#fffbef',
        fontWeight: 900,
        padding: 0,
      };
      const fontSizeMap = {
        1: '3rem',
        2: '2rem',
        3: '1.5rem',
        4: '1.5rem',
        5: '1.5rem',
        6: '1.5rem',
      };
      return { ...baseStyle, fontSize: fontSizeMap[level] || '1.5rem' };
    },
    link: {
      color: '#fffbef',
      fontSize: '1.5rem',
    },
    image: {
      width: '100%',
      height: '100%',
      borderRadius: '10px',
    },
    list: {
      color: '#fffbef',
      fontSize: '1.5rem',
    },
    bold: {
      color: '#fffbef',
      fontSize: '1.5rem',
      fontWeight: 'bold',
    },
    italic: {
      color: '#fffbef',
      fontSize: '1.5rem',
      fontStyle: 'italic',
    },
  };

  return (
    <BlocksRenderer
      content={content}
      blocks={{
        paragraph: ({ children }) => <p style={styles.paragraph}>{children}</p>,
        heading: ({ children, level }) => {
          const style = styles.heading(level);
          const Tag = `h${level}`;
          return <Tag style={style}>{children}</Tag>;
        },
        link: ({ children, url }) => (
          <a style={styles.link} target="_blank" href={url}>
            {children}
          </a>
        ),
        image: ({ image }) => (
          <img src={image.url} style={styles.image} alt={image.alternativeText || ''} />
        ),
        list: ({ children, format }) => {
          const Tag = format === 'ordered' ? 'ol' : 'ul';
          return <Tag style={styles.list}>{children}</Tag>;
        },
      }}
      modifiers={{
        bold: ({ children }) => <strong style={styles.bold}>{children}</strong>,
        italic: ({ children }) => <span style={styles.italic}>{children}</span>,
      }}
    />
  );
};

export default MarkdownContent;
