import React from 'react'
import styles from '../../Answer.module.css'
import Input from '../../../../../components/common/Input'
import CheckBox from '../../../../../components/common/CheckBox'
import TextArea from '../../../../../components/common/TextArea'
import InputGroup from '../../../../../components/common/InputGroup'
import ButtonPar from '../../../../../components/customs/ButtonPar'

function ModalForm({ modal, setModal, closeModal, handleClick }) {
  const checkedHandler = () => {
    if (modal.enable) {
      setModal({ ...modal, enable: false })
    } else {
      setModal({ ...modal, enable: true })
    }
  }
  return (
    <form className={styles.form}>
      <InputGroup name="intent" label={'#Intent'}>
        <Input
          name={'intent'}
          type={'text'}
          value={modal.intent}
          placeholder={'modal'}
          changeHandler={({ target }) =>
            setModal({ ...modal, intent: target.value })
          }
          disabled={true}
        />
      </InputGroup>
      <InputGroup name="state" label={'Enable Intent'} order="rowed">
        <CheckBox checked={modal.enable} checkedHandler={checkedHandler} />
      </InputGroup>
      <InputGroup name="answer" label={'Answer'}>
        <TextArea
          name={'intent'}
          length={'150'}
          type="box"
          value={modal.answer}
          placeholder={'modal'}
          changeHandler={(event) =>
            setModal({ ...modal, answer: event.target.value })
          }
        />
      </InputGroup>
      <ButtonPar cancelClick={closeModal} submitClick={handleClick} />
    </form>
  )
}

export default ModalForm
