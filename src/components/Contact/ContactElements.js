import styled from "styled-components";

export const ContactForm = styled.form`
  width: 100%;
  margin-top: 20px;
`;

export const FormList = styled.ul`
  padding: 0;
  margin: 0;

  li {
    padding: 0;
    margin: 0;
    list-style: none;
    margin-bottom: 10px;
    // overflow: hidden;
    display: block;
    position: relative;
    // opacity: 0;
    animation: fadeInUp 2s 2s;
    animation-fill-mode: forwards;
  }
`;

export const FormItem = styled.li`
  padding: 0;
  margin: 0;
  list-style: none;
  margin-bottom: 10px;
  overflow: hidden;
  display: block;
  position: relative;
  opacity: 0;
  animation: fadeInUp 2s 2s;
  animation-fill-mode: forwards;
  clear: both;
`;

export const FormInput = styled.input`
  width: 49%
  margin-left: 2%;
  display: flex;
  flex-direction: row;
  
  
  &:first-child {
    margin-left: 0;
  }
`;

// export const TextType = styled.in

export const FormMessage = styled.textarea`
  width: 100%
  border: 0;
  background: #115173;
  height: 50px;
  font-size: 16px;
  color: #fff;
  padding: 20px;
  min-height: 150px;
  box-sizing: border-box;
`;
