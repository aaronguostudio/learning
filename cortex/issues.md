# when build get stuck at unit test
- neuron\tmpServices\build.proj
- remove test from <Target Name="Build" DependsOnTargets="PrintBuild;Compile;RebuildDb;Test;Publish" />


## grunt test fail
- turn off memory consuming programs and try again

## Resize vm
- Step 1:
    - https://stackoverflow.com/questions/11659005/how-to-resize-a-virtualbox-vmdk-file
- Step 2:
    - https://forums.virtualbox.org/viewtopic.php?f=35&t=50661