# Base Class

## Using parent function in override
```csharp
public class Person
{
    protected string ssn = "ssn";
    protected string name = "Name";

    // virtual will allow be overrided by the derived class
    public virtual void GetInfo()
    {
        Console.WriteLine("");
    }
}

public class Employee : Person
{
    public string id = "ABC";
    public override void GetInfo()
    {
        base.GetInfo();
        Console.WriteLine("");
    }
}

class TestClass
{
    static void Main()
    {
        Employee E = new Employee();
        E.GetInfo();
    }
}


```


## Using different base constructor

```csharp

public class BaseClass
{
    int sum;

    public BaseClass()
    {
        Console.WriteLine("in BaseClass()");
    }

    public BaseClass(int i)
    {
        num = i
        Console.WriteLine("in BaseClass(int i)");
    }

    public GetNum()
    {
        return num;
    }
}

public class DerivedClass : BaseClass
{
    public DerivedClass() : base()
    {
        // This contructor will call BaseClass.BaseClass()
    }

    public DerivedClass(int i) : base(i)
    {
        // This constructor will call BaseClass.BaseClass(int i)
    }
}

```