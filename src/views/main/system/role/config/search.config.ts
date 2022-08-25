import { IForm } from '@/base-ui/form/types'

export const searchFormConfig: IForm = {
  // 表单配置
  formItems: [
    {
      field: 'name',
      type: 'input',
      label: '角色名称',
      placeholder: '请输入角色名称'
    },
    {
      field: 'intro',
      type: 'input',
      label: '权限介绍',
      placeholder: '请输入权限介绍'
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
