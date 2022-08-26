package com.zebra.applymcbundletocsp;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileInputStream;
import java.io.InputStreamReader;
import java.util.ArrayList;
import java.util.Set;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import android.os.Bundle;
import android.os.Parcel;
import android.os.Parcelable;
import android.util.Base64;

public abstract class BundleTools
{
	
	public static class BundleException extends Exception
	{
		private static final long serialVersionUID = -8407502541451244817L;
		public BundleException(String error) { super(error); }
	}
	
	public static Bundle createBundleFromJsonFile(File jsonFile) throws BundleException
	{
    	if ( jsonFile == null ) throw new BundleException("jsonFile must not be null");
    	
    	if ( !jsonFile.canRead() ) throw new BundleException("jsonFile cannot be read");

    	try
    	{
        	FileInputStream jsonIs = new FileInputStream(jsonFile);
        	InputStreamReader jsonIsr = new InputStreamReader(jsonIs); 
        	BufferedReader jsonBr = new BufferedReader(jsonIsr); 
        	StringBuilder jsonBuilder = new StringBuilder();
        	String jsonLine;
        	do
        	{
        		jsonLine = jsonBr.readLine();
        		if ( jsonLine != null ) jsonBuilder.append(jsonLine + "\n");
        		
        	} while ( jsonLine != null );
        	
        	jsonBr.close();
        	
        	return createBundleFromJsonString(jsonBuilder.toString());
    	}
    	catch(Exception e)
    	{
    		throw new BundleException("Error reading jsonFile - "+e.toString());
    	}
	}

	public static Bundle createBundleFromJsonString(String jsonString) throws BundleException
	{
		try
		{
	    	JSONObject jsonDocument = new JSONObject(jsonString);
	    	
			//String kind = jsonDocument.getString("kind");
			//if ( kind != null ) MyDisplay.writeLine("kind = \""+kind+"\"");
			
			//String productId = jsonDocument.getString("productId");
			//if ( productId != null ) MyDisplay.writeLine("productId = \""+productId+"\"");
			
			JSONArray mcs = jsonDocument.getJSONArray("managedProperty");
			
			if ( mcs == null ) throw new BundleException("Cannot process jsonString - null document ");
			if ( mcs.length() == 0 ) throw new BundleException("Cannot process jsonString - empty document ");

			return jsonArrayToBundle(mcs);
		}
		catch (JSONException e)
		{
			throw new BundleException("Error processing jsonString - "+e.toString());
		}
	}

	public static Bundle createBundleFromBase64String(String stringBundle) throws BundleException
	{
        Bundle bundle = null;
        
        if ( stringBundle == null ) throw new BundleException("stringBundle must be non-null");

        Parcel parcel = Parcel.obtain();
        try
        {
        	byte[] data = Base64.decode(stringBundle, Base64.NO_WRAP);
        	parcel.unmarshall(data, 0, data.length);
        	parcel.setDataPosition(0);
        	bundle = parcel.readBundle();
        }
        finally
        {
        	parcel.recycle();
        }

        return bundle;
	}
	
	public static String createBase64StringFromBundle(Bundle bundle) throws BundleException
	{
        if ( bundle == null ) return null;

        Parcel parcel = Parcel.obtain();
        String serialized = null;
        try
        {
        	bundle.writeToParcel(parcel, 0);
            serialized = Base64.encodeToString(parcel.marshall(), Base64.NO_WRAP);
        }
        catch (Exception e)
        {
            throw new BundleException("Error serializing bundle - "+e.toString());
        }
        finally
        {
            parcel.recycle();
        }

        return serialized;
	}
	
    public static String createJsonStringFromBundle(Bundle bundle,boolean isDoc) throws BundleException
	{
		if ( bundle == null ) throw new BundleException("Bundle must not be null");

		try
		{
	    	if ( isDoc )
	    	{
		    	JSONObject jsonDocument = new JSONObject();
		    	
	    		jsonDocument.put("kind","androidenterprise#managedConfiguration");
		    	jsonDocument.put("productId","com.zebra.oemconfig");
		    	
		    	JSONArray managedProperties = new JSONArray();
		    	bundleToJsonArray(bundle,managedProperties);
	    	
		    	jsonDocument.put("managedProperty",managedProperties);
		    	
		    	return jsonDocument.toString(2);
	    	}

	    	JSONArray jsonBundle = new JSONArray();
			
	    	bundleToJsonArray(bundle,jsonBundle);
	    	
	    	return jsonBundle.toString(2);
		}
		catch ( Exception e )
		{
			throw new BundleException("Error creating jsonString - "+e.toString());
		}
    	
	}
    
    private static void bundleToJsonArray(Bundle bundle,JSONArray jsonArray) throws BundleException
    {
		if ( bundle == null ) throw new BundleException("Bundle must not be null");
		if ( jsonArray == null ) throw new BundleException("jsonArray must not be null");
		
		try
		{
			String subKey = null;
			Set<String> keys = bundle.keySet(); 
			for(String key:keys)
			{
				JSONObject jsonObject = new JSONObject(); 
				jsonObject.put("key", key);

				Object o = bundle.get(key);
				if ( o instanceof String )
				{
					if ( key.equals("@subkey") )
					{
						subKey = (String)o;
						continue;
					}
					else jsonObject.put("valueString",(String)o);
				}
				else if ( o instanceof Integer ) jsonObject.put("valueInteger",(Integer)o);
				else if ( o instanceof Boolean ) jsonObject.put("valueBool",(Boolean)o);
				else if ( o instanceof Bundle )
				{
					JSONArray ja = new JSONArray();
					bundleToJsonArray((Bundle)o,ja);
					//JSONObject jo = new JSONObject();
					//jo.put("",ja);
					jsonObject.put("valueBundle",ja);
				}
				else if ( o instanceof Parcelable[] )
				{
					JSONArray jx = new JSONArray();
					
					Parcelable[] ps = (Parcelable[])o;
					for(Parcelable p:ps)
					{
						JSONArray ja = new JSONArray();
						bundleToJsonArray((Bundle)p,ja);

						JSONObject jo = new JSONObject();
						if ( subKey == null ) subKey = key.substring(0,key.length()-1);
						jo.put("key",subKey);
						jo.put("valueBundle",ja);

						jx.put(jo);
					}

					jsonObject.put("valueBundleArray",jx);
				}
				else {}
				
				jsonArray.put(jsonObject);
			}
		}
		catch ( Exception e )
		{
			throw new BundleException("Error creating jsonString - "+e.toString());
		}
    }
    
	public static ArrayList<String> createStringsFromBundle(Bundle bundle)
	{
		ArrayList<String> list = new ArrayList<String>();
		
		addStringsForBundle(list,0,bundle);
		
		return list;
	}
	
	public static Bundle extractSubBundleFromBundle(Bundle bundle,String group) throws BundleException
	{
		if ( bundle == null ) throw new BundleException("Bundle must not be null");
		if ( group == null ) throw new BundleException("Group name must not be null");
		
		for(String key:bundle.keySet())
		{
			Object o = bundle.get(key);
			if ( o instanceof Bundle )
			{
				if ( key.equalsIgnoreCase(group) ) return (Bundle)o;
				Bundle subBundle = extractSubBundleFromBundle((Bundle)o,group);
				if ( subBundle != null ) return subBundle;
			}
			else if ( o instanceof Parcelable[] )
			{
				Parcelable[] ps = (Parcelable[])o;
				for(Parcelable p:ps)
				{
					Bundle subBundle = extractSubBundleFromBundle((Bundle)p,group);
					if ( subBundle != null ) return subBundle;
				}
			}
		}
		
		throw new BundleException("Cannot find subBundle \""+group+"\"");
	}

    private static void addStringsForBundle(ArrayList<String> list,int count,Bundle bundle)
	{
		String indent = "";
		for(int i=0;i<count;i++) indent += "  ";
		
		for(String key:bundle.keySet())
		{
			Object o = bundle.get(key);
			if ( o instanceof String ) { if ( !key.equals("@subkey") ) list.add(indent+"String \""+key+"\" = \""+(String)o+"\""); }
			else if ( o instanceof Integer ) list.add(indent+"Integer \""+key+"\" = \""+(Integer)o+"\"");
			else if ( o instanceof Boolean ) list.add(indent+"Boolean \""+key+"\" = \""+(Boolean)o+"\"");
			else if ( o instanceof Bundle )
			{
				list.add(indent+"Bundle \""+key+"\"");
				addStringsForBundle(list,count+1,(Bundle)o);
			}
			else if ( o instanceof Parcelable[] )
			{
				Parcelable[] ps = (Parcelable[])o;
				for(int i=0;i<ps.length;i++)
				{
					Bundle b = (Bundle)ps[i];
					list.add(indent+"  Parcelable \""+key+"\"["+i+"]");
					addStringsForBundle(list,count+2,b);
				}
			}
		}
	}
	
	private static void jsonObjectIntoBundle(Bundle bundle,JSONObject jsonObject) throws BundleException
    {
		try
		{
			if ( jsonObject.has("key") )
			{
				String key = jsonObject.getString("key");
				
				if ( jsonObject.has("valueString") )
				{
					bundle.putString(key,jsonObject.getString("valueString"));
					return;
				}

				if ( jsonObject.has("valueBool") )
				{
					bundle.putBoolean(key,jsonObject.getBoolean("valueBool"));
					return;
				}
				
				if ( jsonObject.has("valueInteger") )
				{
					bundle.putInt(key,jsonObject.getInt("valueInteger"));
					return;
				}
				
				if ( jsonObject.has("valueBundle") )
				{
					JSONArray jsonArray = jsonObject.getJSONArray("valueBundle");
					Bundle b = jsonArrayToBundle(jsonArray);
					bundle.putBundle(key,b);
					return;
				}
				
				if ( jsonObject.has("valueBundleArray") )
				{
					JSONArray jsonArray = jsonObject.getJSONArray("valueBundleArray");
					int len = jsonArray.length();
					
					if ( len == 0 )
					{
						bundle.putString(key,"Empty");
						return;
					}
					
					Parcelable[] ps = new Parcelable[len]; 
					for(int i=0;i<len;i++)
					{
						String ki = key+"["+i+"]";
						
						JSONObject jo = jsonArray.getJSONObject(i);
						if ( jo == null )
						{
							bundle.putString(ki,"Null");
							return;
						}
						
						JSONArray ja = jo.getJSONArray("valueBundle");
						if ( ja == null ) throw new BundleException("valueBundleArray \""+key+"\" must have a child valueBundle"); 
						
						String jk = jo.getString("key");
						if ( jk == null ) throw new BundleException("valueBundleArray \""+key+"\" must have a child key"); 
						
						Bundle b = jsonArrayToBundle(ja);
						//b.putString("@subkey",jk);
						ps[i] = b;
					}
					
					bundle.putParcelableArray(key,ps);
					return;
				}
				
				bundle.putString("valueUnknown",jsonObject.toString());
			}
			else
			{
				bundle.putString("jsonObjectIntoBundle-error-no-key",jsonObject.toString());
			}
			
		} catch (JSONException e)
		{
			throw new BundleException("Error processing jsonString - "+e.toString());
		}
    }
    
    private static Bundle jsonArrayToBundle(JSONArray jsonArray) throws BundleException
    {
		Bundle bundle = new Bundle();
		
		int len = jsonArray.length();
		for(int i=0;i<len;i++)
		{
			try
			{
				JSONObject jsonObject = jsonArray.getJSONObject(i);
				String key = jsonObject.getString("key");
				if ( jsonObject != null ) jsonObjectIntoBundle(bundle,jsonObject);
				continue;
			}
			catch (JSONException e)
			{
				throw new BundleException("Error processing jsonString - "+e.toString());
			}
		}
		
		return bundle;
    }
}
