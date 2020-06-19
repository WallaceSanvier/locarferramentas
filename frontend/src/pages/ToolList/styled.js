import styled from 'styled-components';

export const Container = styled.div`
   

  .exit{
      display: flex;
      max-width: 90px;;
      font-size: 50px;
      background: red;
      border-radius: 20px;
  }

  .profile-container {
    width: 100%;
    max-width: 1180px;
    padding: 0 30px;
    margin: 32px auto;
   
}

.profile-container header {
    display: flex;
    align-items: center;
   
}

.profile-container header span {
    font-size: 20px;
    margin-left: 24px;
}



.profile-container header a {
    width: 260px;
    margin-left: auto;
    margin-top: 0;
}

.profile-container header button {
    height: 60px;
    width: 60px;
    background: black;
}

.profile-container header button:hover {
    border-color: #999;
}

.profile-container h1 {
    margin-top: 80px;
    margin-bottom: 24px;
}

.profile-container ul {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 24px;
    list-style: none;
    
}

.profile-container ul li {
    background: #FFF;
    padding: 24px;
    border-radius: 8px;
    position: relative;
  
    
}

.profile-container ul li button {
    position: absolute;
    right: 24px;
    top: 24px;
    border: 0;
    background: red;
    border-radius: 5px;
}

.profile-container ul li button:hover {
    opacity: 0.8;
}

.profile-container ul li strong {
    display: block;
    margin-bottom: 16px;
    color: black;
}

.profile-container ul li p + strong {
    margin-top: 32px;
}

.profile-container ul li p {
    color: black;
    line-height: 21px;
    font-size: 16px;
    
}

@media screen and (max-width: 600px) {

    .profile-container ul {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    grid-gap: 24px;
    list-style: none;
    
    }

    .profile-container ul li button {
    right: 24px;
    top: 24px;
    border: 0;
    color: white;
    background: red;
    border-radius: 5px;
    
   
}

}
@media screen and (max-width: 450px) {
  
    .exit{
        float: left;
        
    }
}

`;
