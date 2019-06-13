package com.aaronguostudio;

import java.util.Hashtable;

public class Main {

    public static void main(String[] args) {

        Hashtable stuff = new Hashtable();
        stuff.put("Aaron", 32);
        stuff.put("Bob", 36);
        stuff.put("Cindy", 50);

        Integer age = (Integer) stuff.get("Aaron");

	    System.out.println("Aaron's age is " + age);
    }
}
