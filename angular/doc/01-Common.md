# Angular CLI 
- ng new project-name
- ng g c component-name
- ng g m module-name
- ng g m module-name --flat -m app
- ng g g directory/name
- ng build --prod
- ng g c -it -is     // inline-template and inline-style
- ng g m directive



# ChangeDetection
- Angular 默认的是全局检查，大型项目中可能会引发性能问题，ChangeDetection 可以使用 OnPush 策略来通知 Angular 检查某些操作再去更新

# Dpendency Injection
