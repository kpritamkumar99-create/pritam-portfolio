import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Lock, Unlock, Upload, Trash2, LogOut, Plus, Edit, Image as ImageIcon, Briefcase, Award, Users, ChevronRight, Settings, Target, Zap, Clock, Code, MessageSquare, Phone, User as UserIcon } from 'lucide-react';
import Cropper from 'react-easy-crop';
import { supabase } from '../lib/supabaseClient';

const Admin = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState('projects');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const [data, setData] = useState({ 
    projects: [], 
    certificates: [], 
    timeline: [], 
    services: [], 
    philosophy: [], 
    leads: [], 
    chat_history: [] 
  });
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [formData, setFormData] = useState({});
  const [isSaving, setIsSaving] = useState(false);

  // Crop States
  const [image, setImage] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);

  const getCroppedImg = async (imageSrc, pixelCrop) => {
    const image = new Image();
    image.src = imageSrc;
    await new Promise(resolve => image.onload = resolve);
    const canvas = document.createElement('canvas');
    canvas.width = pixelCrop.width;
    canvas.height = pixelCrop.height;
    const ctx = canvas.getContext('2d');
    ctx.drawImage(image, pixelCrop.x, pixelCrop.y, pixelCrop.width, pixelCrop.height, 0, 0, pixelCrop.width, pixelCrop.height);
    return new Promise(resolve => canvas.toBlob(resolve, 'image/jpeg'));
  };

  useEffect(() => {
    setLoading(false);
  }, []);

  const fetchAllData = async () => {
    const [p, c, t, s, ph, l, ch] = await Promise.all([
      supabase.from('projects').select('*').order('created_at', { ascending: false }),
      supabase.from('certificates').select('*').order('created_at', { ascending: false }),
      supabase.from('timeline').select('*').order('created_at', { ascending: false }),
      supabase.from('services').select('*').order('created_at', { ascending: false }),
      supabase.from('philosophy').select('*').order('created_at', { ascending: false }),
      supabase.from('leads').select('*').order('created_at', { ascending: false }),
      supabase.from('chat_history').select('*').order('created_at', { ascending: false })
    ]);
    
    setData({ 
      projects: p.data || [], 
      certificates: c.data || [], 
      timeline: t.data || [], 
      services: s.data || [], 
      philosophy: ph.data || [], 
      leads: l.data || [],
      chat_history: ch.data || []
    });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError('');
    if (password === 'Pritam@2026') {
      setSession({ user: { email: 'admin@pritam.dev' } });
      fetchAllData();
    } else {
      setError('Invalid passkey. Access denied.');
    }
  };

  const handleLogout = () => setSession(null);

  const deleteItem = async (id, table) => {
    if (!window.confirm('Confirm permanent deletion?')) return;
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (!error) fetchAllData();
  };

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  }, []);

  const handleFileChange = (e) => {
    if (e.target.files && e.target.files.length > 0) {
      const reader = new FileReader();
      reader.addEventListener('load', () => setImage(reader.result));
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setIsSaving(true);
    
    let image_url = null;
    if (image && croppedAreaPixels) {
      try {
        const croppedBlob = await getCroppedImg(image, croppedAreaPixels);
        const fileName = `${activeTab}/${Date.now()}.jpg`;
        const { data: uploadData, error: uploadError } = await supabase.storage
          .from('assets')
          .upload(fileName, croppedBlob);
        
        if (uploadError) throw uploadError;
        const { data: urlData } = supabase.storage.from('assets').getPublicUrl(fileName);
        image_url = urlData.publicUrl;
      } catch (err) {
        console.error('Upload error:', err);
        setError('Failed to upload image.');
        setIsSaving(false);
        return;
      }
    }

    const { error } = await supabase.from(activeTab).insert([{ ...formData, image_url }]);
    
    if (!error) {
      setIsModalOpen(false);
      setFormData({});
      setImage(null);
      fetchAllData();
    } else {
      setError(error.message);
    }
    setIsSaving(false);
  };

  if (loading) return (
    <div className="h-screen flex flex-col items-center justify-center gap-4">
      <div className="w-12 h-12 border-4 border-apple-blue border-t-transparent rounded-full animate-spin" />
      <p className="font-black text-gray-400 uppercase tracking-widest text-xs">Initializing Secure Link</p>
    </div>
  );

  if (!session) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FBFBFD] px-6">
        <motion.div initial={{ scale: 0.95, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} className="ios-glass max-w-md w-full p-12 border-white/60 shadow-2xl">
          <div className="text-center space-y-6 mb-10">
            <div className="w-24 h-24 bg-apple-blue rounded-[2.5rem] flex items-center justify-center mx-auto shadow-2xl shadow-apple-blue/30">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl font-black tracking-tight text-black">Master Access</h1>
            <p className="text-gray-500 font-medium">Verify credentials to manage digital assets.</p>
          </div>
          <form onSubmit={handleLogin} className="space-y-6">
            <input 
              type="password" 
              placeholder="••••••••" 
              className="w-full bg-ios-gray/50 border-2 border-transparent text-center text-2xl tracking-[0.5em] font-black rounded-2xl py-5 focus:bg-white focus:border-apple-blue/20 transition-all outline-none" 
              value={password} 
              onChange={e => setPassword(e.target.value)} 
              required 
            />
            {error && <p className="text-red-500 text-sm text-center font-black">{error}</p>}
            <button type="submit" className="ios-button-primary w-full py-5 text-lg shadow-apple-blue/30">Unlock Dashboard</button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FBFBFD] pt-40 pb-20">
      <div className="max-w-7xl mx-auto px-6">
        <header className="flex flex-col md:flex-row md:items-center justify-between mb-16 gap-8">
          <div>
            <h1 className="text-5xl font-black tracking-tighter text-black leading-none mb-2">Executive Command</h1>
            <div className="flex items-center gap-2 text-apple-blue font-bold uppercase tracking-widest text-xs">
              <span className="w-2 h-2 bg-apple-blue rounded-full animate-ping" />
              Secure Session Active
            </div>
          </div>
          <button onClick={handleLogout} className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-red-50 text-red-500 font-black hover:bg-red-500 hover:text-white transition-all shadow-sm">
            <LogOut className="w-5 h-5" /> End Session
          </button>
        </header>

        <div className="grid lg:grid-cols-[300px_1fr] gap-16">
          {/* Enhanced Sidebar */}
          <aside className="space-y-3">
            {[
              { id: 'projects', label: 'Projects', icon: Briefcase },
              { id: 'certificates', label: 'Certificates', icon: Award },
              { id: 'timeline', label: 'Timeline', icon: Clock },
              { id: 'services', label: 'Services', icon: Zap },
              { id: 'philosophy', label: 'Philosophy', icon: Target },
              { id: 'leads', label: 'Leads', icon: UserIcon },
              { id: 'chat_history', label: 'Chat Logs', icon: MessageSquare },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center justify-between p-5 rounded-3xl transition-all font-black ${
                  activeTab === tab.id ? 'bg-apple-blue text-white shadow-2xl shadow-apple-blue/30' : 'bg-white text-gray-400 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center gap-4">
                  <tab.icon className="w-6 h-6" />
                  {tab.label}
                </div>
                <ChevronRight className={`w-4 h-4 transition-transform ${activeTab === tab.id ? 'rotate-90' : ''}`} />
              </button>
            ))}
          </aside>

          {/* Main Content Area */}
          <main className="space-y-10">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-black capitalize tracking-tight text-black">{activeTab.replace('_', ' ')} Management</h2>
              {!['leads', 'chat_history'].includes(activeTab) && (
                <button 
                  onClick={() => setIsModalOpen(true)}
                  className="ios-button-primary !py-4 !px-8 flex items-center gap-2 text-sm shadow-apple-blue/20"
                >
                  <Plus className="w-5 h-5" /> New Asset
                </button>
              )}
            </div>

            <div className="grid gap-6">
              {data[activeTab].length === 0 ? (
                <div className="ios-glass text-center py-24 border-dashed border-4 border-gray-100 bg-transparent rounded-[3rem]">
                  <p className="text-gray-400 font-black uppercase tracking-widest text-sm">No Data Recorded in {activeTab}</p>
                </div>
              ) : (
                data[activeTab].map(item => (
                  <motion.div 
                    layout
                    key={item.id} 
                    className="ios-glass flex items-center justify-between p-8 rounded-[2.5rem] border-white/60 group hover:shadow-xl transition-all duration-500"
                  >
                    <div className="flex items-center gap-8">
                      {item.image_url ? (
                        <div className="w-20 h-20 rounded-[1.5rem] bg-gray-50 overflow-hidden border-2 border-white shadow-inner">
                          <img src={item.image_url} alt="" className="w-full h-full object-cover" />
                        </div>
                      ) : (
                        <div className="w-20 h-20 rounded-[1.5rem] bg-ios-gray/50 flex items-center justify-center text-gray-300">
                          {activeTab === 'leads' ? <Phone className="w-8 h-8" /> : activeTab === 'chat_history' ? <MessageSquare className="w-8 h-8" /> : <ImageIcon className="w-8 h-8" />}
                        </div>
                      )}
                      <div>
                        <h3 className="font-black text-xl text-black">
                          {item.title || item.name || (activeTab === 'chat_history' ? `${item.role}: ${item.content?.substring(0, 50)}...` : item.id)}
                        </h3>
                        <p className="text-gray-400 font-bold">
                          {item.description || item.contact || item.subtitle || item.role || item.year || item.created_at}
                        </p>
                        {item.query && <p className="text-apple-blue font-medium mt-2 text-sm">Query: {item.query}</p>}
                      </div>
                    </div>
                    <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <button 
                        onClick={() => deleteItem(item.id, activeTab)}
                        className="p-4 bg-red-50 text-red-500 rounded-2xl hover:bg-red-500 hover:text-white transition-all shadow-sm"
                      >
                        <Trash2 className="w-6 h-6" />
                      </button>
                    </div>
                  </motion.div>
                ))
              )}
            </div>
          </main>
        </div>
      </div>

      {/* Asset Creation Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <div className="fixed inset-0 z-[1200] flex items-center justify-center p-6">
            <motion.div 
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setIsModalOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-md" 
            />
            <motion.div 
              initial={{ scale: 0.95, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 30 }}
              className="relative w-full max-w-2xl bg-white rounded-[4rem] shadow-[0_50px_100px_rgba(0,0,0,0.3)] overflow-hidden"
            >
              <div className="p-12 space-y-8">
                <h2 className="text-4xl font-black text-black">Create {activeTab.slice(0, -1)}</h2>
                
                <form onSubmit={handleSave} className="space-y-8">
                  {image ? (
                    <div className="relative h-72 bg-gray-900 rounded-[3rem] overflow-hidden shadow-2xl border-4 border-white">
                      <Cropper
                        image={image}
                        crop={crop}
                        zoom={zoom}
                        aspect={activeTab === 'projects' ? 16 / 9 : 1}
                        onCropChange={setCrop}
                        onCropComplete={onCropComplete}
                        onZoomChange={setZoom}
                      />
                    </div>
                  ) : (
                    <div className="flex items-center justify-center w-full h-48 border-4 border-dashed border-gray-100 rounded-[3rem] bg-ios-gray/30 hover:bg-ios-gray/50 transition-all relative group">
                      <input type="file" className="absolute inset-0 opacity-0 cursor-pointer" onChange={handleFileChange} />
                      <div className="text-center group-hover:scale-110 transition-transform">
                        <Upload className="w-12 h-12 text-apple-blue mx-auto mb-3" />
                        <p className="text-sm font-black text-gray-500 uppercase tracking-widest">Upload & Perfect Image</p>
                      </div>
                    </div>
                  )}

                  <div className="grid grid-cols-2 gap-6">
                    <input 
                      type="text" placeholder="Identity / Title" className="w-full bg-ios-gray/50 rounded-2xl py-5 px-8 font-bold outline-none focus:bg-white focus:ring-4 focus:ring-apple-blue/5 transition-all"
                      onChange={e => setFormData({...formData, title: e.target.value, name: e.target.value})} required 
                    />
                    <input 
                      type="text" placeholder="Subtitle / Context" className="w-full bg-ios-gray/50 rounded-2xl py-5 px-8 font-bold outline-none focus:bg-white focus:ring-4 focus:ring-apple-blue/5 transition-all"
                      onChange={e => setFormData({...formData, subtitle: e.target.value, year: e.target.value})}
                    />
                  </div>
                  
                  <textarea 
                    placeholder="Describe the asset with precision..." 
                    className="w-full bg-ios-gray/50 rounded-[2.5rem] py-6 px-8 font-bold outline-none focus:bg-white focus:ring-4 focus:ring-apple-blue/5 transition-all h-40 resize-none"
                    onChange={e => setFormData({...formData, description: e.target.value})} required 
                  />

                  <div className="flex gap-6 pt-4">
                    <button type="button" onClick={() => setIsModalOpen(false)} className="flex-1 px-8 py-5 rounded-2xl bg-ios-gray font-black text-gray-500 hover:bg-gray-200 transition-all uppercase tracking-widest text-sm">Cancel</button>
                    <button type="submit" disabled={isSaving} className="flex-1 ios-button-primary shadow-apple-blue/20">
                      {isSaving ? 'Processing...' : 'Deploy Asset'}
                    </button>
                  </div>
                </form>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Admin;
