// Wrap with using for unmanaged code (The code from standard library)
// Will prevent memory leaking
private void DrawSomething()
{
    using(var bluBrush = new SolidBrush(Color.BLue))
    {
        using(var graphics = CreateGraphics())
        {
            // ...
        }
    }
}