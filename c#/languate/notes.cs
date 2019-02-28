using System.IO;

using (FileStream steam = GetFileStream(context))
{
    // Operations on the stream
    // Once the using block completes, the .NET runtime automatically calls the stream object's Dispose() method, which releases the file handle.
}
