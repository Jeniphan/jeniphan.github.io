import { useAppContext } from '@hooks/context';
import { Button, Form, Input, InputNumber } from 'antd';
import React from 'react'
import { BsFacebook, BsFillTelephoneFill, BsLinkedin } from 'react-icons/bs';
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { AiFillFacebook, AiFillGithub, AiFillInstagram, AiFillLinkedin } from "react-icons/ai"
import styles from './contact.module.css'

export default function Contact() {
  const context = useAppContext();

  const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
  };

  /* eslint-disable no-template-curly-in-string */
  const validateMessages = {
    required: '${label} is required!',
    types: {
      email: '${label} is not a valid email!'
    }
  };
  /* eslint-enable no-template-curly-in-string */

  const onFinish = (values: any) => {
    console.log(values.user);
    window.open(`mailto:jeni.pukkham@gmail.com?subject=เมลล์จากคุณ${values.user.email}-เรื่อง${values.user.title}&body=${values.user.project}`)
  };



  return (
    <div className={`${styles.contact} w-full pt-[70px] h-auto overflow-hidden m-0 pb-[70px]`}>
      <div className={`text-center ${context.theme == 'dark' ? styles.title_dark : styles.title}`}>
        <h2>
          Contact me
        </h2>
        <span>
          Get in touch
        </span>
      </div>

      <div className="row pt-[20px]">
        <div className="col-lg-4 gap-y-5">
          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <BsFacebook className="w-[2rem] h-[2rem]" />
                </div>
                <h3>Jeniphan Pukkham</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://www.m.me/jeniphan.pukkham">
                  <p>{`Write to me ->`}</p>
                </a>
              </div>
            </div>
          </div>

          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <BsLinkedin className="w-[2rem] h-[2rem]" />
                </div>
                <h3>Jetniphan Pukkham</h3>
                <a target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/jetniphan-pukkham-957671212/">
                  <p>{`Write to me ->`}</p>
                </a>
              </div>
            </div>
          </div>

          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <MdEmail className="w-[2rem] h-[2rem]" />
                </div>
                <h3>Jeni.pukkham@gmail.com</h3>
                <a href="https://mail.google.com/mail/u/0/?view=cm&ui=2&tf=0&fs=1&to=jeni.pukkham@gmail.com"
                  className=""
                  target="_blank" rel="noopener noreferrer">
                  <p>{`Write to me ->`}</p>
                </a>
              </div>
            </div>
          </div>

          <div className="pb-[1rem]">
            <div className={`card ${styles.bg__card} ${context.theme == 'dark' ? styles.bg__card__dark : ''}`}>
              <div className={`${context.theme == 'dark' ? styles.card__body__dark : styles.card__body} card-body text-center`}>
                <div className={`flex justify-content-center w-full mb-[5px] ${context.theme == 'dark' ? styles.icon__dark : ''}`}>
                  <BsFillTelephoneFill className="w-[2rem] h-[2rem]" />
                </div>
                <h3>080-915-3786</h3>
                <a href="tel:+66809153786">
                  <p>{`Call me now ->`}</p>
                </a>
              </div>
            </div>
          </div>
        </div>


        <div className="col-lg-8">
          <Form {...layout} name="nest-messages" onFinish={onFinish} validateMessages={validateMessages}>
            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }, { required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'title']} label="Title" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name={['user', 'project']} label="Project" rules={[{ required: true }]}>
              <Input.TextArea />
            </Form.Item>
            <Form.Item wrapperCol={{ ...layout.wrapperCol, offset: 8 }}>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>

      <div className={`row m-0 w-100 gap-y-4 pt-[70px] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f]'}`}>
        <div className="col-lg-6 flex align-items-center gap-2 justify-content-center">
          <FaMapMarkerAlt className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          <span className="text-[18px]">Chiang mai,Thailand.</span>
        </div>

        <div className="col-lg-6 flex align-items-center gap-x-2 justify-content-center">
          <span className={`${styles.follow} text-[18px]`}>Follow me :</span>
          <a href="https://www.facebook.com/jeniphan.pukkham/" className="" target="_blank" rel="noopener noreferrer">
            <AiFillFacebook className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
          <a href="https://www.instagram.com/jetniphan_pk/" className="" target="_blank" rel="noopener noreferrer">
            <AiFillInstagram className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
          <a href="https://github.com/Jeniphan" className="" target="_blank" rel="noopener noreferrer">
            <AiFillGithub className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
          <a href="https://www.linkedin.com/in/jetniphan-pukkham-957671212/" className="" target="_blank" rel="noopener noreferrer">
            <AiFillLinkedin className={`w-[2rem] h-[2rem] ${context.theme == 'dark' ? 'text-[#fafafa]' : 'text-[#3f3f3f6e]'}`} />
          </a>
        </div>
      </div>
    </div >
  )
}
