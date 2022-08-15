import { IForm } from '@/base-ui/form/types'

export const searchFormConfig: IForm = {
  // 表单配置
  formItems: [
    {
      field: 'id',
      type: 'input',
      label: 'id',
      placeholder: '请输入id'
    },
    {
      field: 'name',
      type: 'input',
      label: '用户名',
      placeholder: '请输入用户名'
    },
    {
      field: 'password',
      type: 'password',
      label: '密码',
      placeholder: '请输入密码'
    },
    {
      field: 'sport',
      type: 'select',
      label: '喜欢的运动',
      placeholder: '请选择喜欢的运动',
      options: [
        { title: '唱', value: 'sing' },
        { title: '跳', value: 'jump' },
        { title: 'rap', value: 'rap' },
        { title: '篮球', value: 'basketball' }
      ]
    },
    {
      field: 'createTime',
      type: 'datepicker',
      label: '创建时间',
      otherOptions: {
        startPlaceholder: '开始时间',
        endPlaceholder: '结束时间',
        type: 'daterange'
      }
    }
  ],
  // 表单item响应式配置
  colLayout: {
    span: 8
  },
  // item样式
  itemStyle: {
    padding: '10px 40px'
  },
  // 表头占宽
  labelWidth: '120px'
}
