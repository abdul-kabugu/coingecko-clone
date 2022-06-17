import { UserOutlined } from '@ant-design/icons';
import { Input, Modal, Alert } from 'antd';
import React, {useState} from 'react';

const TopNavbar = () => {
    const {Search} = Input
    const [isModalVisible, setIsModalVisible] = useState(false)
    const [isSignupVisible, setIsSignupVisible] = useState(false)
    const [LogInEmail, setLogInEmali] = useState("")
    const [Password, setPassword] = useState("")
    const [signupEmail, setSignupEmail] = useState("")
    const [SignupPass, setSignupPass] = useState("")
    

    const onSearch = (value)  =>  {
      console.log(value)
    }
   const closeModal = () => {
     setIsModalVisible(false)
   }

   const showModal = () => {
    setIsModalVisible(true)
  }

  const closeSignuModal = () => {
    setIsSignupVisible(false)
  }

  const showSignuModal = () => {
   setIsModalVisible(true)
 }

  const alertError  = () =>  {
   {/*} <Alert
      message="Error"
      description="This is an error message about copywriting."
      type="error"
      showIcon
  />*/}
  console.log("hellow  world")
  
  }
    return <div className='top-nav-container'>
    <div className='top-nav-left'>
     <Search placeholder="input search text" onSearch={onSearch} enterButton style={{width: "600px", borderColor: "yellow"}} bordered="true"/>
      
      </div>
      <div className='top-nav-right'>
          <div className='nav-top-item'>
              <UserOutlined style={{width: "25px", marginLeft: "5px"}}/> <span className='potrtifolio'  onClick={alertError} >portfolio</span>
          </div>
          <div className='nav-top-item'>
              <span className='login-btn' onClick={showModal}>log in</span>
          </div>

          <div className='nav-top-item'>
              <span className='login-btn' onClick={showModal}>sign up</span>
          </div>

      </div>

      <Modal title="Log In" visible={isModalVisible} onOk={closeModal} onCancel={closeModal} footer={null} width={400} >
      <p className='input-label'> email</p>
      <input type="text" value={LogInEmail} onChange={e => setLogInEmali(e.target.value) }    className="input-box"      />
      <p className='input-label'> Password </p>
      <input type="text" value={Password} onChange={e => setPassword(e.target.value) }    className="input-box"      />
      <button className='modal-log-in-btn'>log in </button>
      <p className='modal-bottom-paragraph'>Don't have an account? Sign up</p>
      <p className='modal-bottom-paragraph'>Didn't receive confirmation instructions? Resend confirmation instructions</p>
      </Modal>

      
      <Modal title="Sign Up To Continue" visible={isSignupVisible} onOk={closeSignuModal} onCancel={closeSignuModal} footer={null} width={400} >
      <p className='input-label'> email</p>
      <input type="text" value={LogInEmail} onChange={e => setLogInEmali(e.target.value) }    className="input-box"      />
      <p className='input-label'> Password </p>
      <input type="text" value={Password} onChange={e => setPassword(e.target.value) }    className="input-box"      />
      <p className='user-tip'>Security Tip: Do not reuse passwords that you have used in other apps or websites.</p>
      <button className='modal-log-in-btn' onClick={ showSignuModal}>sign up </button>
      <p className='modal-bottom-paragraph'>Already have an account? Login</p>
      <p className='modal-bottom-paragraph'>Didn't receive confirmation instructions? Resend confirmation instructions</p>
      </Modal>
    </div>;
}



export default TopNavbar;