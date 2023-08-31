面向对象的多态是指同一类对象在不同的情境下可以表现出不同的行为。在面向对象编程中，
多态可以通过继承和重写父类方法实现。

对于表单校验的实现，可以使用多态的思想来实现。具体步骤如下：

1. 创建一个抽象的表单校验类，定义校验方法和错误信息处理方法。
2. 创建具体的校验规则类，继承抽象表单校验类，并重写校验方法和错误信息处理方法。
每个校验规则类代表一个具体的校验规则，如手机号校验、邮箱校验等。
3. 创建一个表单校验对象，将需要校验的表单元素和对应的校验规则作为参数传入。
4. 遍历表单元素，根据不同的校验规则调用对应的校验方法进行校验。
5. 如果校验失败，则调用错误信息处理方法处理错误信息。

以下是用 JavaScript 实现的示例代码：

```javascript
// 抽象表单校验类
class FormValidator {
  validate (value) {
    throw new Error ("validate method should be implemented");
  }

  showError (errorMsg) {
    throw new Error ("showError method should be implemented");
  }
}

// 手机号校验规则类
class PhoneValidator extends FormValidator {
  validate (value) {
    const phoneRegex = /^1 [3-9]\d {9}$/;
    return phoneRegex.test (value);
  }

  showError (errorMsg) {
    alert (errorMsg);
  }
}

// 邮箱校验规则类
class EmailValidator extends FormValidator {
  validate (value) {
    const emailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    return emailRegex.test (value);
  }

  showError (errorMsg) {
    console.error (errorMsg);
  }
}

// 表单校验对象
class FormValidation {
  constructor (formElement) {
    this.formElement = formElement;
    this.validators = [];
  }

  addValidator (elementId, validator) {
    const element = this.formElement.querySelector (`#${elementId}`);
    if (element) {
      this.validators.push ({ element, validator });
    }
  }

  validateForm () {
    this.validators.forEach (({ element, validator }) => {
      const value = element.value;
      const isValid = validator.validate (value);
      if (!isValid) {
        validator.showError ("Invalid input");
      }
    });
  }
}

// 使用示例
const form = document.querySelector ("#myForm");
const formValidation = new FormValidation (form);

// 添加手机号校验规则
const phoneValidator = new PhoneValidator ();
formValidation.addValidator ("phoneInput", phoneValidator);

// 添加邮箱校验规则
const emailValidator = new EmailValidator ();
formValidation.addValidator ("emailInput", emailValidator);

// 执行表单校验
formValidation.validateForm ();
```

在上面的示例中，我们定义了一个抽象的表单校验类 `FormValidator`，
然后创建了具体的校验规则类 `PhoneValidator` 和 `EmailValidator`，
这两个类分别实现了 `validate` 方法和 `showError` 方法。
然后我们创建了一个表单校验对象 `FormValidation`，通过调用 `addValidator` 方法添加需要校验的表单元素和对应的校验规则。
最后，调用 `validateForm` 方法执行表单校验。

通过使用多态的思想，我们可以根据不同的校验规则来调用不同的校验方法和错误信息处理方法，
从而实现了表单的校验功能。